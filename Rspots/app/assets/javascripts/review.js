    function addReview(location){

    $.getJSON("http://daretodiscover.net/wine", function (data) {
//placeholder call while we get the right stuff for reviews.
        var template = HandlebarsTemplates["review"];
        var html = template({reviews: data});
        return html;
    });
  }

  function newLocation(location){
    $.getJSON("http://daretodiscover.net/wine", function (data) {
//placeholder call while we get the right stuff for reviews.
        var template = HandlebarsTemplates["newlocation"];
        var html = template({reviews: data});
        return html;
    });
  }