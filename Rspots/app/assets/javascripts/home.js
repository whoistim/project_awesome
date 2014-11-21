google.maps.event.addDomListener(window, 'load', function () {
	console.log("Hello");
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

// var defaultBounds = new google.maps.LatLngBounds(
  //     new google.maps.LatLng(37.79086,-122.40147),
  //     new google.maps.LatLng(37.8337, -122.3143));
  // map.fitBounds(defaultBounds);

});
