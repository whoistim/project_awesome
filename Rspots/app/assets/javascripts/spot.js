//The GA location
var myLatlng = new google.maps.LatLng(37.7908767,-122.4016454);

//Places the GA marker on the map
var myMarker = function(myLatlng,map){
	new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: image,
    title:"General Assembly"
	});
};


var image = {
  url: 'assets/GA.png',
  size: new google.maps.Size(71, 71),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(17, 34),
  scaledSize: new google.maps.Size(40, 40)
};

var our_places;
var my_group;