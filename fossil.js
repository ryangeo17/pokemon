function populateCards(data) {

        const setName = "fossil";
        const cards = data[setName].cards;
        console.log(`Set: ${setName}, Number of Cards: ${cards.length}`);
        const setElement = document.createElement('h2');
        document.body.appendChild(setElement);
        setElement.style.textAlign = 'center';
        setElement.className = 'set';
        setElement.style.fontWeight = 'bold';
        setElement.style.margin = '10px 0';

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
            

            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            cardContainer.style.display = 'flex';
            cardContainer.style.flexDirection = 'column';
            cardContainer.style.alignItems = 'center';
            cardContainer.style.margin = '10px';
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
                    cardImage.style.opacity = '0.5'; // Change opacity on hover
                });
                cardImage.addEventListener('mouseout', () => {
                    cardImage.style.opacity = '1'; // Reset opacity when not hovering
                });
            }

            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.textContent = `${card.name} - (${card.number})`;
            cardElement.style.flex = '1 0 0px'; // Flex-grow, flex-shrink, flex-basis
            cardElement.style.margin = '10px';  
            cardContainer.appendChild(cardElement);
                          
            
        });
    

}



fetch('sets.json')
    .then(response => response.json())
    .then(data => {
        populateCards(data);
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });