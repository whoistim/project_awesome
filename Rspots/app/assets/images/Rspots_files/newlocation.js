(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["newlocation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<p><%= location.title %></p>\n<p><%= location.address %></p>\n<br>\n";
  },"useData":true});
  return this.HandlebarsTemplates["newlocation"];
}).call(this);
