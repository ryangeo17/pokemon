function populateCards(data) {
        console.log(data);
        console.log("test");

        const setElement = document.createElement('h2');
        const cards= data;
        document.body.appendChild(setElement);
        setElement.style.textAlign = 'center';
        setElement.className = 'set';
        setElement.style.fontWeight = 'bold';
        setElement.style.margin = '10px 0';

        // red "X" button
        

        const container= document.createElement('div');
        container.className = 'container';
        document.body.appendChild(container);
        container.style.display = 'flex';  
        container.style.flexDirection = 'column';
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'cards-container';
        cardsContainer.style.display = 'flex';
        cardsContainer.style.flexWrap = 'wrap';
        cardsContainer.style.justifyContent = 'center';
        cardsContainer.style.flexDirection = 'row';
        
        container.appendChild(cardsContainer);
        
        cards.forEach(card => {
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '✖'; 
            removeBtn.style.position = 'absolute';
            removeBtn.style.top = '5px';
            removeBtn.style.right = '5px';
            removeBtn.style.background = 'red';
            removeBtn.style.color = 'white';
            removeBtn.style.border = 'none';
            removeBtn.style.borderRadius = '50%';
            removeBtn.style.width = '25px';
            removeBtn.style.height = '25px';
            removeBtn.style.cursor = 'pointer';
            removeBtn.style.display = 'none'; // hidden by default

            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            cardContainer.style.display = 'flex';
            cardContainer.style.flexDirection = 'column';
            cardContainer.style.alignItems = 'center';
            cardContainer.style.margin = '10px';
            cardContainer.style.position = 'relative';
            cardContainer.appendChild(removeBtn);
            cardsContainer.appendChild(cardContainer);

            if (card.img) {
                const cardImage = document.createElement('img');
                cardImage.className = 'card-image';
                cardImage.src = card.img;
                cardImage.alt = card.name;
                cardContainer.appendChild(cardImage);
                cardImage.style.width = '250px';
                cardImage.style.height = 'auto'; // Maintain aspect ratio
                cardImage.style.flex = '1 1 auto'; // Set image width to 100% of the card
                cardImage.addEventListener('mouseover', () => {
                    removeBtn.style.display = 'block'; // Show remove button on hover
                });
                cardImage.addEventListener('mouseout', () => {
                    removeBtn.style.display = 'none'; // Hide remove button when not hovering
                });
            }

            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.textContent = `${card.name} - (${card.number})`;
            cardElement.style.fontFamily = 'Roboto, sans-serif';
            cardElement.style.flex = '1 0 0px'; // Flex-grow, flex-shrink, flex-basis
            cardElement.style.margin = '10px';  
            cardContainer.appendChild(cardElement);
            removeBtn.addEventListener('mouseover', () => { 
                document.body.style.cursor = 'pointer';
            });
            removeBtn.addEventListener('mouseout', () => {
                document.body.style.cursor = 'default';
            });

            removeBtn.addEventListener('click', () => {
                fetch(`http://localhost:3000/myCards/${card.id}`, {
                    method: 'DELETE',
                })
                .then(res => {
                    if (!res.ok) throw new Error("Failed to delete");
                    // also remove from UI immediately:
                    cardContainer.remove();
                })
                .catch(err => console.error(err));
            });
                          
            
        });
    

}



fetch('http://localhost:3000/myCards')
    .then(response => response.json())
    .then(data => {
        populateCards(data);
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });