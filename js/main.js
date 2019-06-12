var btn=document.getElementById("go-button");

function buttonClicked()
{
  console.log("Button Clicked");
  btn.removeEventListener("click",buttonClicked);
  document.getElementById("text").innerHTML="Dont do it";
}

btn.addEventListener("click", buttonClicked);
