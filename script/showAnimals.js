let showMoreButton = document.getElementById("shownext");
showMoreButton.addEventListener("click", showAnimalDetails);
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clear);

function showAnimalDetails() {
    const url = "https://zoo-animal-api.herokuapp.com/animals/rand";
    const target = document.getElementById("target");
    const error = document.getElementById("error");
    target.innerHTML = "";
    error.innerHTML = "";

    fetch(url)
        .then(response => {  
            if (response.status === 200){
                return response.json();
            }
        })
        .then(el => {
            
            target.innerHTML += `<h2><u>${el.name}</u></h2>`;
            target.innerHTML += `<p><b>Scientific Name:</b> ${el.latin_name}</p>`;
            target.innerHTML += `<img src="${el.image_link}" width="200px" alt="Image of ${el.name}" title="${el.name}"></img>`;
            target.innerHTML += `<p><b>Type:</b> ${el.animal_type}</p>`;
            target.innerHTML += `<p><b>Lifespan (years):</b> ${el.lifespan}</p>`;
            target.innerHTML += `<p><b>Habitat:</b> ${el.habitat}</p>`;
            target.innerHTML += `<p><b>Diet:</b> ${el.diet}</p>`;
            target.innerHTML += `<p><b>Found In:</b> ${el.geo_range}</p>`;
            
            
            
        })
        .catch(e => {
            console.error('ERROR: '+e);
            error.innerHTML += `<p>Something Went Wrong. Please try again later.<p/>`;        
        });
    
}

function clear() {
    const target = document.getElementById("target");
    target.innerHTML = "";
    error.innerHTML = "";
}