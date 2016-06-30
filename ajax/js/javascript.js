function act(){
$.ajax({
  url: "http://fvi-grad.com:4004/quote",
  success: function(resp, txt, obj){
$("#title").html(resp.author);
$("#p").html(resp.quote);

  }
});
}
$("#button").on("click", function(){
  act();
})
act();
