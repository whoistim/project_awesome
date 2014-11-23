class LocationsController < ApplicationController
  before_action :current_user

  #NEED TO NEST UNDER GROUPS
  #controller to add location, triggered by adding review to searched location
  def create
    group_id = params[:id]

    # add the location if it doesn't already exist
    location = params.require(:group).permit(:title, :lat, :lng, :address, :place_id, :website, :phone_number)
    new_location = Location.create_with(location).find_or_create_by(place_id: location.place_id)

    # add the location to groups_locations table
    group_location = GroupLocation.create(group_id: group_id, location_id:location.id)

    # add review
    review = params.require(:review).permit(:rating, :review)
    @new_review = Review.create(rating: review.rating, review: review.review, group_location_id: group_location.id, user_id: @current_user.id)

  end

  private
  def location_params
    params.require(:group).permit(:title, :lat, :lng, :address, :place_id, :website, :phone_number)
  end


end
