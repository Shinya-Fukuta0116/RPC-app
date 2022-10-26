const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", function () {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // Is call all the inner function
  startGame();

};

// start the game function
game();