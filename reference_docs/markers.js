//get locations from gmap into an array
//get locations into an array
var arr_places = {};
$.getJSON("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.7912563,-122.4006792&radius=500&types=restaurant&key=AIzaSyDo_Bxtq4HV1n84J8yd-L7G47vzMAyksPg", function(result){
	result = arr_places;
	// console.log(result);
});

for (var i = 0, place; place = arr_places[i]; i++) {
  if (place.reviewed){
  	var image = {url: assets/images/icon1.png};
	  }
  else{
  	var image = {
    url: assets/images/icon2.png};
	  }
var marker = new google.maps.Marker({
    position: place.,
    map: map,

	}



//show info box for marker



//put markers onto the map


//recenter the map on the new location