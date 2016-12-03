$(document).ready(function(){
  $("#getLocation").on("click",function(){
    
    var url="https://api.wunderground.com/api/6ff845a392d1e886/geolookup/conditions/forecast/q/autoip.json";
    
    $.ajax({
      url: url,
      dataType:"jsonp",
      success: function(response){
        var city=response.location.city;
        var tempInFah=response.current_observation.temp_f;
        var tempIncel=response.current_observation.temp_c;
        $("#city").text(city);
        $("#celsius").on("click",function(){
          $("#temp-in-cel").text(tempIncel+"*cel");
        });
        
 $("#fahre").on("click",function(){
   $("#temp-in-fahr").text(tempInFah+"*fah");
 });
      }
    });
    
  });
  
});
