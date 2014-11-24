//The GA location
// var grpLatlng = new google.maps.LatLng(my_group.lat,my_group.lng);
var myLatlng = new google.maps.LatLng(37.7908767,-122.4016454);

// sets logo as GA logo -- NEED TO CHANGE TO GET LOGO FROM DB in v2
var logo = {
  url: '/assets/GA.png',
  size: new google.maps.Size(71, 71),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(17, 34),
  scaledSize: new google.maps.Size(40, 40)
};

//Places the GA marker on the map
var groupMarker = function(myLatlng,map){
	new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: logo,
    title:"General Assembly"
  });
};


var my_group;

var our_locations  = [{id: 1, title: "Mixt Greens", lat: "-122.40063700000002", lng: "37.791578", address: "120 Sansome St., San Francisco, CA", place_id: "ChIJ62yCEWKAhYARNL0YQVpRuKg", website: "http://mixtgreens.com", phone_number: "415-555-5555", created_at: "2014-11-21 23:09:45", updated_at: "2014-11-21 23:09:45"},
{id: 2, title: "Rickhouse", lat: "-122.40386799999999", lng: "37.79046", address: "246 Kearny St, San Francisco", place_id: "ChIJd7ebnImAhYARhr91iINx01g", website: "http://www.rickhousebar.com/", phone_number: "415-777-7777", created_at: "2014-11-21 23:09:45", updated_at: "2014-11-21 23:09:45"},
{id: 3, title: "House of NanKing", lat: "-122.40542600000003", lng: "37.796477", address: "919 Kearny St, San Francisco, CA 94133, United Sta...", place_id: "ChIJvS92wfSAhYARC2tq3BmjmIM", website: "http://poop.com", phone_number: "415-333-3333", created_at: "2014-11-21 23:09:45", updated_at: "2014-11-21 23:09:45"}];

var setMarkers = function (locations,map){

	//loop over each location passed into page to set marker for each
  locations.forEach(function(location){
  var locLatlng = new google.maps.LatLng(location.lng,location.lat);
  var contentString = function(){
    if(our_locations.indexOf(location)){
      return("Review placeholder for location "+location.id);//replace with (newReview(location))
    }//returns the reviews plus the form for new reviews.
    else{
      return("New location & review form goes here");//returns just the html for the form   //replace with newLocation(location)
    }
  };
  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 400
  }); //end infowindow variable

    //lets us see locations referenced in console for testing
    console.log(locLatlng);

  	// Sets image for points on map
    var image =
    {url: '/assets/blue2.png',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(16, 16),
    scaledSize: new google.maps.Size(32, 32)
    }; // end of setting image for markers

    // sets marker
    var marker = new google.maps.Marker({
      position: locLatlng,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
      title:location.title
    });//end of marker object

    //function to add infobox to marker
    google.maps.event.addListener(marker, 'click', function() {

    infowindow.open(map,marker);
    });//end info window function

  });//end of locations loop
};// end of set markers function


