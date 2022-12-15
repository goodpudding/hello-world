function Adopt(){
    let favColor = prompt("Thats exciting! What color cat?", "Help me find a kitty!")
    if (favColor === "black"){
        alert("I have a black ca!t")
    }
    else if (favColor === "white"){
        alert("I also have a white cat!")
    }
    else{
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
