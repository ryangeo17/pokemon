
function populateSets(data) {
    const container= document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    container.style.display = 'flex';  
    container.style.flexDirection = 'row';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.margin = '50px'; // Add margin around the container
    container.style.flexWrap = 'wrap'; // Allow items to wrap to the next line if necessary
    container.style.gap = '50px'; // Add space between items

    for (const setName in data) {


        
        const sets = data[setName];


        

        const setContainer = document.createElement('div');
        setContainer.className = 'set-container';
        setContainer.style.display = 'flex';
        setContainer.style.flexDirection = 'column';
        setContainer.style.alignItems = 'center';
        setContainer.style.justifyContent = 'center';
        setContainer.style.margin = '10px';
        setContainer.href = `${setName}.html`; // Link to the set page
        setContainer.style.cursor = 'pointer'; // Change cursor to pointer on hover
        setContainer.addEventListener('click', () => {
            window.location.href = `${setName}.html`; // Navigate to the set page on click
        });
        container.appendChild(setContainer);


        const setImage = document.createElement('img');
        setImage.className = 'set-image';
        setImage.src = sets.img;
        setImage.alt = sets.name;
        setContainer.appendChild(setImage);
        setImage.style.width = 'auto';
        setImage.style.height = '100px'; //
        setImage.style.flex = '1 1 auto'; // Set image width to 100% of the card
        setImage.addEventListener('mouseover', () => {
            setImage.style.opacity = '0.5'; // Change opacity on hover
        });
        setImage.addEventListener('mouseout', () => {
            setImage.style.opacity = '1'; // Reset opacity when not hovering
        });

        const setElement = document.createElement('p');
        setContainer.appendChild(setElement);
        setElement.style.textAlign = 'center';
        setElement.className = 'set';
        setElement.textContent = `${sets.name}`;
        setElement.style.margin = '10px 0';
            
    }
    
}
fetch('sets.json')
    .then(response => response.json())
    .then(data => {
        populateSets(data);
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
