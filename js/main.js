var btn=document.getElementById("go-button");

function buttonClicked()
{
  console.log("Button Clicked");
  btn.removeEventListener("click",buttonClicked);
  document.getElementById("text").innerHTML="Dont do it";
}

var hobbies=["Gaming","Travelling","Listening to kavi sammelan","coc","programmimg","music"];

console.log("I no longer like my hobbie ",hobbies.pop());

hobbies.push("flirting");

hobbies.push("archiry");

btn.addEventListener("click", buttonClicked);
