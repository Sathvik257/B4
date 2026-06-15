function rollDice() {

    let dice = document.getElementById("dice");

    let faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

    dice.classList.add("roll");

    let rolling = setInterval(() => {
        let randomFace = faces[Math.floor(Math.random() * 6)];
        dice.innerHTML = randomFace;
    }, 100);

    setTimeout(() => {

        clearInterval(rolling);

        dice.classList.remove("roll");

        let finalNumber = Math.floor(Math.random() * 6);
        dice.innerHTML = faces[finalNumber];

    }, 1000);
}