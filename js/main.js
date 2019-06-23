var btn=document.getElementById("go-button");

function buttonClicked()
{
  console.log("Button Clicked");
  // btn.removeEventListener("click",buttonClicked);
  // document.getElementById("text").innerHTML="Dont do it";

var customText = document.getElementsByClassName("my-input");
var textArea= document.getElementsByClassName("my-textarea");
var result= document.getElementById("text");
console.log(customText);
result.innerHTML= "Hello, "+customText[0].value+"<br />";
result.innerHTML += "Messege :" + textArea[0].value+"<br />";


}




btn.addEventListener("click", buttonClicked);
