const listarella=["uno","due","tre","quattro"];
const myWord="ciao mondo";

const playBtn=document.getElementById("play");
const uno=document.getElementById("uno");
const due=document.getElementById("due");
const tre=document.getElementById("tre");



for(let i=0;i<=listarella.length;i++){
    console.log(listarella[i]);
}

//play button

playBtn.addEventListener("click",function(){
    alert("HELLO ERGHES !");
})


//button name change and play

uno.addEventListener("click",function(){
    console.log("il mio nome è play");
    uno.innerHTML="UNO";
})

due.addEventListener("click",function(){
    console.log("il mio nome è play2");
    due.innerHTML="DUE";
})

tre.addEventListener("click",function(){
    console.log("il nome è play3");
    tre.innerHTML="TRE";
})