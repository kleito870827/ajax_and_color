$.ajax({
  url: "http://ipinfo.io/json",
  success: function(resp, txt, xhr){
    console.log(resp);
    $("#location").html(resp.city+","+resp.region+", "+resp.country);
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?zip="+resp.postal+",us&appid=bb8ed5a52537e120760c5c2e685ae998",
      success: function(resp, txt, xhr){
        console.log(resp);
        var t = resp.main.temp;
        t = Math.round(Number(t))-276;
        $("#temper").html(t+ " c*");
      var iconName = resp.wether[0].icon;
      var iconUrl = "http://openweathermap.org/img/w/" +icomName"+.png";
      $("#weather-icon").attr("src",iconUrl);
    }
    })
  }

});
