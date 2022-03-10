//https://disneyapi.dev


let list = document.querySelector(".some-stuff");
let mario = document.querySelector(".first-pic");
let peach = document.querySelector(".second-pic");
let bowser = document.querySelector(".third-pic");

//gets pictures for the mario, peach, bowser
fetch("https://www.amiiboapi.com/api/amiibo/?gameseries=0x00")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.amiibo);
    // let string = "";
    for (let i = 0; i < data.amiibo.length; i++) {
      // string += `<li>${data.amiibo[i].character}</li>`
      // console.log(data.amiibo[i].character, i, data.amiibo[i].image)
      // console.log(data.amiibo[i].gameseries, i)
      // list.innerHTML = string
    }

    console.log(data.amiibo[6].image)
    mario.src = data.amiibo[6].image 
    peach.src = data.amiibo[15].image
    bowser.src = data.amiibo[29].image


  })

//pictures for the food
fetch("https://foodish-api.herokuapp.com/api/")



