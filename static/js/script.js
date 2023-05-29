// PRESS THE MENU BUTTON TO TRIGGER ANIMATION
// PRESS PLAY BUTTON TO LISTEN THE DEMO SONG

// As seen on: "https://dribbble.com/shots/2144866-Day-5-Music-Player-Rebound/"

// THANK YOU!
var audio = document.getElementById("audio");
var playpause = document.getElementById("play");
let songs = ["Chakkori", "DuskTillDwan","Aromale","Marachipomanna","Let Me","Pillow Talk"];
let count = 0;
let count1 = 0;


//document.getElementById("test2").innerHTML = "hai";
function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "Pause";
      
      audio.play();
   } else {
      playpause.title = "Play";
      audio.pause();
   }
}

function next() {
   if (count === 6) {
      count = 0;
   }
   document.getElementById("test").innerHTML = songs[count];
   document.getElementById("i").innerHTML = songs[count];

   if (count === 0) {
      document.getElementById("0").style.color="#ff564c";
      document.getElementById("5").style.color="white";
      document.getElementById("audio5").pause();
      audio = document.getElementById("audio");
      audio.play();
      
   }
   else if (count === 1) {
      document.getElementById("0").style.color="white";

      document.getElementById("1").style.color= "#ff564c";

      audio = document.getElementById("audio1");
      document.getElementById("audio").pause();
      audio.play();
   }
   else if (count === 2) {
      document.getElementById("0").style.color="white";

      document.getElementById("1").style.color = "white";
      document.getElementById("2").style.color="#ff564c";

      audio = document.getElementById("audio2");
      document.getElementById("audio1").pause();
      audio.play();

   }
   else if (count === 3) {
      document.getElementById("0").style.color="white";

      document.getElementById("1").style.color = "white";
      document.getElementById("2").style.color = "white";

      document.getElementById("3").style.color="#ff564c";
      audio = document.getElementById("audio3");
      document.getElementById("audio2").pause();
      audio.play();

   }
   else if (count === 4) {
      document.getElementById("0").style.color="white";
      document.getElementById("1").style.color = "white";
      document.getElementById("2").style.color = "white";
      document.getElementById("3").style.color = "white";
      document.getElementById("4").style.color="#ff564c";

      
      audio = document.getElementById("audio4");
      document.getElementById("audio3").pause();
      audio.play();

   }
   else if (count === 5) {
      document.getElementById("0").style.color="white";
      document.getElementById("1").style.color = "white";
      document.getElementById("2").style.color = "white";
      document.getElementById("3").style.color = "white";
      document.getElementById("4").style.color = "white";

      document.getElementById("5").style.color="#ff564c";
      audio = document.getElementById("audio5");
      document.getElementById("audio4").pause();
      audio.play();

   }

  
      
   count += 1;
   count1 = count - 1;

}

function prev() {
   if (count1 === 0) {
      count1 = 6;
   }
   count1--;
   document.getElementById("test").innerHTML = songs[count1];
   document.getElementById("i").innerHTML = songs[count1];


  // document.getElementById("s").innerHTML = count1;
   if (count1 === 0) {
      audio = document.getElementById("audio");
      document.getElementById("0").style.color = "#ff564c";
      document.getElementById("1").style.color="white";


      
   }
   else {
      audio = document.getElementById("audio" + count1);
 
   }
   if (count1 === 5) {
      document.getElementById("audio").pause(); 
      document.getElementById("5").style.color = "#ff564c";
      document.getElementById("0").style.color="white";


   }
   if (count1 === 4) {
      document.getElementById("audio5").pause();  
      document.getElementById("4").style.color = "#ff564c";
      document.getElementById("0").style.color = "white";
      document.getElementById("5").style.color="white";

   }
   if (count1 === 3) {
      document.getElementById("audio4").pause();  
      document.getElementById("3").style.color = "#ff564c";
      document.getElementById("0").style.color = "white";
      document.getElementById("5").style.color = "white";
      document.getElementById("4").style.color="white";


   }
   if (count1 === 2) {
      document.getElementById("audio3").pause();
       
      document.getElementById("2").style.color = "#ff564c";
      document.getElementById("0").style.color = "white";
      document.getElementById("5").style.color = "white";
      document.getElementById("4").style.color = "white";
      document.getElementById("3").style.color="white";

   }
   if (count1 === 1) {
      document.getElementById("audio2").pause();  
      document.getElementById("1").style.color = "#ff564c";
      document.getElementById("0").style.color = "white";
      document.getElementById("5").style.color = "white";
      document.getElementById("4").style.color = "white";
      document.getElementById("3").style.color = "white";
      document.getElementById("2").style.color="white";

   }
   if (count1 === 0) {
      document.getElementById("audio1").pause();  
   }


   audio.play();



   

   
   count = count1 + 1;  
}


   

