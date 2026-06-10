function playSound() {
    var sound = document.getElementById("mySound");
    sound.currentTime = 0;
    sound.play();
}

const slogans = [
    "From cows not treated with rBST!",
    "40% oats!",
    "OSHA compliant!",
    "New look, same great taste!",
    "Like a rolling stone!",
    "Independent!",
    "Organic!",
    "Great source of protein!",
    "Store in a cool, dry place!",
    "Batteries not included!",
    "Some assembly required!",
    "Hi Mom!",
    "Hello world!",
    "Drumming on a tub and singing!",
    "California grown!",
    "Born in time!",
    "Since 2008!",
    "Pasture raised!",
    "Cage free!",
    "Grade A!",
    "Walking the cow!",
    "Stuck inside of Mobile with the Memphis blues again!",
    "Al otro lado del río!",
    "Reduced fat!",
    "Low sodium!",
    "Now subject to enshittification!",
    "Intellectually stimulating!",
    "Contains small parts!",
    "Choking hazard!",
    "Omniscient, omnipotent, and omnibenevolent!",
    "As seen on TV!",
    "Ass seen on TV!",
    "Refurbished!",
    "Legal in all 50 states!",
    "Not canon!",
    "Unauthorized!",
    "Good for you!",
    "Part of a balanced breakfast!",
    "All rights reserved!",
    "You'll be hearing from my lawyer!",
    "Supercalifragilisticexpialidocious!",
];

const pick = Math.floor(Math.random() * slogans.length);
document.querySelector("#slogan i").textContent = slogans[pick];