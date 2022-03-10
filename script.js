let mario = document.querySelector(".first-pic");
let peach = document.querySelector(".second-pic");
let bowser = document.querySelector(".third-pic");
let marioBtn = document.querySelector(".mario-button");
let peachBtn = document.querySelector(".peach-button");
let bowserBtn = document.querySelector(".bowser-button");
let marioSpeach = document.querySelector(".mario-shines");
let exitMario = document.querySelector(".mario-close");
let peachSpeach = document.querySelector(".peach-shines");
let exitPeach = document.querySelector(".peach-close");
let bowserSpeach = document.querySelector(".bowser-shines");
let exitBowser = document.querySelector(".bowser-close");
let page= document.querySelector(".pic-container")

//gets pictures for the mario, peach, bowser
fetch("https://www.amiiboapi.com/api/amiibo/?gameseries=0x00")
  .then((response) => response.json())
  .then((data) => {
    mario.src = data.amiibo[6].image;
    peach.src = data.amiibo[15].image;
    bowser.src = data.amiibo[29].image;
  });

// marioBtn.addEventListener("click", () => {
//   marioSpeach.style.display = "block";
//   exitMario.addEventListener("click", () => {
//     marioSpeach.style.display = "none"; 
//   });
// });

marioBtn.addEventListener("click", () => {
  marioSpeach.style.display = "block";
  exitMario.addEventListener("click", () => {
    marioSpeach.style.display = "none"; 
  });
  window.onclick = function (event) {
    if (event.target == marioSpeach) {
      marioSpeach.style.display ="none";
    }
  }
});

peachBtn.addEventListener("click", () => {
  peachSpeach.style.display = "block";
  exitPeach.addEventListener("click", () => {
    peachSpeach.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target == peachSpeach) {
      peachSpeach.style.display ="none";
    }
  }
});

bowserBtn.addEventListener("click", () => {
  bowserSpeach.style.display = "block";
  exitBowser.addEventListener("click", () => {
    bowserSpeach.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target == bowserSpeach) {
      bowserSpeach.style.display ="none";
    }
  }
});

