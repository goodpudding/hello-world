function Adopt() {
    let favColor = prompt("Thats exciting! What color cat?", "Black, White, Tabby, etc.")
    if (favColor === "black") {
        alert("I have a black ca!t")
    }
    else if (favColor === "white") {
        alert("I also have a white cat!")
    }
    else {
        alert("A " + favColor + " kitty! How cute!")
    }
}
function favKitty() {
    var favPic = document.getElementById("favpic");
    document.getElementById("favourite").value = favPic.options[favPic.selectedIndex].text;
}
function myFunction() {
    alert("Me too!");
}
function howManyCats() {
    let userPick = prompt("How many cat photos would you like to see?(a number between 1-15")
    let userAnswer = true;
    while (userPick == "") {
        userPick = prompt("How many cat photos would you like to see?(a number between 1-15");
    }
    while (userAnswer) {
        if (userPick < 1 || userPick > 15) {
            userPick = prompt(" isn't 1-15. Pick again please:")
        }
        else {
            userAnswer = false;
        }
    }
    console.log(userAnswer);
    let percentage = 100 / userPick;
    for (i = 1; i <= userPick; i++) {
        document.write("<img src='./images/catPhotos/" + i + ".jpg' style='width:" + percentage + "%;' />")
        // `<img src='./images/catPhotos/${i}.jpg' style='width:${percentage}%' />`
    }
}
