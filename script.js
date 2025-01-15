document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
       fetchData();
    }
 }, false);

async function fetchData() {
    try {
        const pokeName = document.getElementById("pokeName").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

        if(!response.ok){
            throw new Error("Can not fetch resource")
        }

        const data = await response.json()  
        const pokeSprite = data.sprites.front_default
        const imgElement = document.getElementById("pokeSprite")

        imgElement.src = pokeSprite
        imgElement.style.display = "block"
        

    } catch (error) {
        console.log(error)
    }
}