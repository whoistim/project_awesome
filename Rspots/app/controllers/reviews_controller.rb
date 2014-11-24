class ReviewsController < ApplicationController
  before_action :current_user

  #NEED TO NEST UNDER GROUPS
  #controller to add review to existing location
  def create
    #get id from route
    group_id = params[:group_id]
    location_id = require(:location).permit(:id)

    # add the location to groups_locations table
    group_location = GroupLocation.find_by_group_id_and_location_id(group_id: group_id, location_id:location_id)

    # add review that triggered location creation
    review = params.require(:review).permit(:rating, :review)
    @new_review = Review.create(rating: review.rating, review: review.review, group_location_id: group_location.id, user_id: @current_user.id)

    #response for AJAX call
    respond_to do |format|
      format.html # map.html.erb
      format.json { render json: @new_review}
    end

  end



  private
  def review_params
    params.require(:review).permit(:rating, :review, :group_location_id, :user_id)
  end

  def location_params
    params.require(:location).permit(:title, :lat, :lng, :address, :place_id, :website, :phone_number)
  end

end
