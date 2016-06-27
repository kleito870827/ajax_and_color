var notesAudio = {
  c : document.getElementById("c-note"),
  d : document.getElementById("d-note"),
  a : document.getElementById("a-note"),
 b : document.getElementById("b-note"),
e  : document.getElementById("e-note"),
f : document.getElementById("f-note")
};


$(function(){
/*document.getElementById("c-note").play();*/
$(".box").on("click",function(e){
var whichNote = $(this).attr("id");
/*document.getElementById(whichNote+"-note").currentTime = 0;
document.getElementById(whichNote+"-note").play();*/
/*notesAudio[whichNote].currentTime = 0;
notesAudio[whichNote].play();*/
playNote(whichNote);
});
$(document).on("keypress",function(e){
  if (e.key === "1") playNote("a");
  if (e.key === "2") playNote("b");
  if (e.key === "3") playNote("c");
  if (e.key === "4") playNote("d");
  if (e.key === "5") playNote("f");
  if (e.key === "6") playNote("g");
  /*if (e.key === "2") {
    notesAudio.d.currentTime =0;
    notesAudio.d.play();
  }*/
});
function playNote(note){
  notesAudio[note].currentTime = 0;
  notesAudio[note].play();
}
});
