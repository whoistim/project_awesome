

google.maps.event.addDomListener(window, 'load', function () {
	// var myLatlng = new google.maps.LatLng(37.7908767,-122.4016454);

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

console.log(myLatlng);
	myMarker(myLatlng,map);//TG: puts GA home marker on the map.
	setMarkers(our_locations,map);

	//Code added to be able to search for a place and then mark it on the map:
	var searchBox = new google.maps.places.SearchBox((input));


	google.maps.event.addListener(searchBox, 'places_changed', function() {
	  var places = searchBox.getPlaces();
	  var markers = [];
	  console.log("Place:" + places);
	  if (places.length == 0) {
	    return;
	  }
	  for (var i = 0, marker; marker = markers[i]; i++) {
	    marker.setMap(null);
	  }

		// For each place, get the icon, place name, and location.
		markers = [];
		var bounds = new google.maps.LatLngBounds();

		for (var i = 0, place; place = places[i]; i++) {
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

			markers.push(marker);
			bounds.extend(place.geometry.location);
			map.setCenter(place.geometry.location);
		}
		// map.fitBounds(bounds);
		//
	});


// google.maps.event.addListener(map, 'bounds_changed', function() {
// 	var bounds = map.getBounds();
// 	searchBox.setBounds(bounds);
// });


});
