document.querySelector(".btn").addEventListener("click", function() {

    document.getElementById("dice-sound").play();

    let dice_number_1 = Math.floor(Math.random() * 6) + 1;
    let random_image_1 = "images/yel_" + dice_number_1 + ".png";

    let dice_number_2 = Math.floor(Math.random() * 6) + 1;
    let random_image_2 = "images/yel_" + dice_number_2 + ".png";

    const dice1 = document.querySelectorAll(".player img")[0];
    const dice2 = document.querySelectorAll(".player img")[1];

    // Reset animation
    dice1.classList.remove("roll-animation");
    dice2.classList.remove("roll-animation");

    // Force reflow so the animation can re-trigger
    void dice1.offsetWidth;
    void dice2.offsetWidth;

    // Add animation again
    dice1.classList.add("roll-animation");
    dice2.classList.add("roll-animation");

    document.querySelectorAll(".player img")[0].setAttribute("src", random_image_1);
    document.querySelectorAll(".player img")[1].setAttribute("src", random_image_2);

    if (dice_number_1 > dice_number_2) {
        document.querySelector(".winner h3").innerHTML = "&#128681 Player - 1 Wins &#128681";
    } else if (dice_number_2 > dice_number_1) {
        document.querySelector(".winner h3").innerHTML = "&#128681 Player - 2 Wins &#128681";
    } else {
        document.querySelector(".winner h3").innerHTML = "&#128681 Draw ! &#128681";
    }
});