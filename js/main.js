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

// hobbies.forEach(function(item,index)
// {
//   document.write("i like ", index ," ", item, "<br />");
// })

if(hobbies.indexOf("Listening to kavi sammelan")>-1)
{
  document.write("I like to listen to kavi sammelan <br />");
}

if(hobbies.indexOf("PUBG")>-1)
{

}
else {
  document.write("i donn't play PUBG");
}

btn.addEventListener("click", buttonClicked);
