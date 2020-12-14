var display_button=document.getElementById("sh");
var main=document.getElementById("vk");
display_button.addEventListener("click",()=>{
  main.style.display="initial";
  display_button.style.display="none";
})

var spacebar=document.getElementById("spacebar");
spacebar.addEventListener("click",()=>{
display.value+="  ";
})

var display=document.getElementById("input");
var clr=document.getElementById("clear");
clr.addEventListener("click",()=>{
  display.value="";
})

function hit(){
  display.value+=event.target.value;
  console.log(display.value);
}

/*DELETE BUTTON*/
var display = document.getElementById("input");
var del=document.getElementById("delete");
del.addEventListener("click",()=>{
  display.value=display.value.slice(0,-1);
});