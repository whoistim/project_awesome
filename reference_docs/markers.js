//get locations from gmap into an array
var places = {};
places = $.getJSON("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.7912563,-122.4006792&radius=500&types=restaurant&key=AIzaSyDo_Bxtq4HV1n84J8yd-L7G47vzMAyksPg", function(result){

	console.log(result);
});




//show info box for marker



//put markers onto the map


