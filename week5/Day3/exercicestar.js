const btnRandom = document.querySelector('#get-character');
const loading = document.querySelector('#loading');
const errorMessage = document.querySelector('#error-message');
const characterInfo = document.querySelector('#character-info');

const characterName = document.querySelector('#character-name');
const characterHeight = document.querySelector('#character-height');
const characterGender = document.querySelector('#character-gender');
const characterBirth = document.querySelector('#character-birth');
const characterHomeworld = document.querySelector('#character-homeworld');


btnRandom.addEventListener('click',()=>{
    let randomNb = Math.floor(Math.random() * 83)
    data(randomNb);

})

const data = async (randomNb)=>{
    try {
        loading.classList.remove('hidden');
        characterInfo.classList.add('hidden');
        const fetchData = await fetch(`https://www.swapi.tech/api/people/${randomNb}` )
        if(!fetchData.ok){
            throw new Error(`Character not found (ID: ${randomId})`);
        }
        const getData = await fetchData.json();
        loading.classList.add('hidden');
        showCharacter(getData)
        
        
    } catch (error) {
        console.error(error)
        loading.classList.add('hidden');
        errorMessage.classList.remove('hidden')
        
    }
 
}


const showCharacter = (data)=>{
    characterInfo.classList.remove('hidden');
    characterName.textContent = data.result.properties.name;
    characterHeight.textContent = data.result.properties.height;
    characterGender.textContent = data.result.properties.gender;
    characterBirth.textContent = data.result.properties.birth_year;
    characterHomeworld.textContent = data.result.properties.homeworld;

}