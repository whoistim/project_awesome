(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["review"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <p>\n  <img src=\"/assets/up.svg\" alt=\"\" height=\"25px\" width=\"25px\">\n  "
    + escapeExpression(((helper = (helper = helpers.review || (depth0 != null ? depth0.review : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"review","hash":{},"data":data}) : helper)))
    + "\n  </p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<!-- location header -->\n<p class=\"lead location-header\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n\n<!-- location information div -->\n<div class=\"location-info\">\n  <p>\n    "
    + escapeExpression(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"address","hash":{},"data":data}) : helper)))
    + "<br>\n    "
    + escapeExpression(((helper = (helper = helpers.phone_number || (depth0 != null ? depth0.phone_number : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"phone_number","hash":{},"data":data}) : helper)))
    + "<br>\n    "
    + escapeExpression(((helper = (helper = helpers.group_id || (depth0 != null ? depth0.group_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"group_id","hash":{},"data":data}) : helper)))
    + "\n    <a href=\""
    + escapeExpression(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"website","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + escapeExpression(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"website","hash":{},"data":data}) : helper)))
    + "</a>\n  </p>\n</div>\n\n<!-- reviews -->\n\n<div class=\"review-box\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.reviews : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n\n<form \n	class=\"hbs\" \n	action=\"/groups/"
    + escapeExpression(((helper = (helper = helpers.group_id || (depth0 != null ? depth0.group_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"group_id","hash":{},"data":data}) : helper)))
    + "/reviews\" \n	method=\"POST\">\n\n	<input type=\"hidden\" name=\"location_id\" value=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	<input type=\"hidden\" name=\"authenticity_token\" value=\"\">\n<label><input type=\"radio\" name=\"rating\" value=\"1\"required> Try it!</label>\n<label><input type=\"radio\" name=\"rating\" value=\"-1\"required> Skip it!</label>\n<input type=\"textarea\" required name=\"review\" >\n<input type=\"submit\" value=\"Save\">\n</form>\n\n\n";
},"useData":true});
  return this.HandlebarsTemplates["review"];
}).call(this);
