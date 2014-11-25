//The GA location

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

// ajax call for location reviews
var get_location_reviews = function (g_id,l_id) {
  return $.ajax({
    dataType: "json",
    url: '/groups/'+ g_id +'/locations/'+ l_id +'.json',
    type:"GET",
  });// end ajax call
};

var setMarkers = function (locations,map){
  //group_id for ajax call
  var group_id = $('#group_id').attr('data-path');

	//loop over each location passed into page to set marker for each
  locations.forEach(function(location){
    location.group_id = group_id; // add group_id to location object

    // ajax call to return reviews for each location
    $.when(get_location_reviews(group_id,location.id)).done(function(reviews){

      location.reviews = reviews; // add reviews to location object
      // console.log(location.reviews)
      var template_html = HandlebarsTemplates["review"](location); //passing location to hbs template

      var contentString = template_html; //adding template to content for infowindow
      var locLatlng = new google.maps.LatLng(location.lat,location.lng);

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,
        pixelOffset: {width:-23, height:3}
      }); //end infowindow variable

      //lets us see locations referenced in console for testing
      // console.log(locLatlng);

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

        if(currentWindow){
          currentWindow.setMap(null);
        }
        currentWindow = infowindow;
        infowindow.open(map,marker);
        //adding auth token to allow controller access. Tricksy.
        $('form.hbs input[name=authenticity_token]').val(
          $('meta[name="csrf-token"]').attr('content')
        );

      });//end info window function

    });//end of when function
  });//end of locations loop
};// end of set markers function


