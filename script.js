import confetti from 'https://cdn.skypack.dev/canvas-confetti'




const jokeEl =document.getElementById('joke')
const jokeBtn = document.getElementById(`jokeBtn`)

function party(){
    confetti()
}

jokeBtn.addEventListener(`click`,generateJoke)
generateJoke()



function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    
        }
    
    fetch ('https://icanhazdadjoke.com/',config)
    .then(res =>res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
    party()
}

