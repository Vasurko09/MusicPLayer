from django.shortcuts import render
def prev():
    print('prev')
# Create your views here.
def home(requests):
    return render(requests,'home.html',{'prev':prev})

'''
function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "Pause";
      audio.play();
   } else {
      playpause.title = "Play";
      audio.pause();
   }
}
   if (count === 0) {
      audio = document.getElementById("audio");
      audio.play();
      
   }
   else if (count === 1) {
      audio = document.getElementById("audio1");
      document.getElementById("audio").pause();
      audio.play();
   }
   else if (count === 2  || count === 0) {
      document.getElementById("audio1").pause();
   }
   prev:
      if (count1 === 1) {

      audio = document.getElementById("audio1");
      document.getElementById("audio2").pause();

      audio.play();

   }
   else if (count1 === 0) {
      audio = document.getElementById("audio");
      document.getElementById("audio1").pause();

      audio.play();
   }
   else if (count1 === 2) {
      audio = document.getElementById("audio2");
      document.getElementById("audio1").pause();
      audio.play();
   }
'''