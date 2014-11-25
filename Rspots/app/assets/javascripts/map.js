var load_map = function () {
	var markers = [];
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
		zoom: 17,
		center: new google.maps.LatLng(37.7912563,-122.4006792),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		streetViewControl: false,
		panControl: false,
		zoomControl: false,
		scrollwheel: true,
  });

	var input = ( document.getElementById('pac-input'));
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

	// console.log(myLatlng);

	groupMarker(myLatlng,map);//TG: puts GA home marker on the map. function from spot.js

	// id for ajax call
	var group_id = $('#group_id').attr('data-path');

	// ajax call to grab locations from DB
	$.ajax({
	    url:'/groups/'+ group_id +'/map.json',
	    type:"GET",
	    success: function (locations){
	        setMarkers(locations,map); // calls function from spot.js to put down markers
	    },
	    error: function (xhr, status){
	        console.info(xhr.error);
	    }
	});

	//Code added to be able to search for a place and then mark it on the map:
	var searchBox = new google.maps.places.SearchBox((input));
	window.currentWindow=null;

	google.maps.event.addListener(searchBox, 'places_changed', function() {
	  var places = searchBox.getPlaces();

	  // console.log("Place:" + places);
	  if (places.length == 0) {
	    return;
	  }
	  for (var i = 0, marker; marker = markers[i]; i++) {
	    marker.setMap(null);
	  }

		// For each place, get the icon, place name, and location.
		markers = [];
		var bounds = new google.maps.LatLngBounds();

		places.forEach(function(place){
		  var image = {
		    url: place.icon,
		    size: new google.maps.Size(71, 71),
		    origin: new google.maps.Point(0, 0),
		    anchor: new google.maps.Point(17, 34),
		    scaledSize: new google.maps.Size(25, 25)
			};

			// Create a marker for each place.
			var marker = new google.maps.Marker({
			  map: map,
			  icon: image,
			  title: place.name,
			  position: place.geometry.location
			});

		//ADDING HANDLEBARS TEMPLATE TO INFO WINDOW HERE
		place.group_id = group_id; //adding group id to place object
		console.log(place);
		var newlocation_html = HandlebarsTemplates["newlocation"](place);	//passing place to hbs template
		var contentString = newlocation_html; //adding new location to infowindow
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 400,
      pixelOffset: {width:-23, height:3}
	  }); //end infowindow variable

    //add event listener to marker to open infowindow on click
    google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
			//close any open infowindows on clicking new marker
			if(currentWindow){
				currentWindow.setMap(null);
			}
			currentWindow = infowindow;
			//adding auth token to allow controller access. Tricksy.
        $('form.hbs input[name=authenticity_token]').val(
          $('meta[name="csrf-token"]').attr('content')
        );
    });

			markers.push(marker);
			bounds.extend(place.geometry.location);
			map.setCenter(place.geometry.location);
		}	);
});

	google.maps.event.addListener(map, 'bounds_changed', function() {
		var bounds = map.getBounds();
		searchBox.setBounds(bounds);
	});

}; //end load_map function
