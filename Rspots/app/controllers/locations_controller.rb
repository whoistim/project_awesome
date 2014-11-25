  class LocationsController < ApplicationController
  before_action :current_user

  #NEED TO NEST UNDER GROUPS
  #controller to add location, triggered by adding review to searched location
  def create
    group_id = params[:group_id]

    # add the location if it doesn't already exist
    location = location_params()
    new_location = Location.create_with(location).find_or_create_by(place_id: location[:place_id])
    new_location.groups << Group.find(group_id)
    new_location.save

    group_location = GroupLocation.where(group_id: group_id, location_id: new_location.id).last
    # binding.pry

    # add review that triggered location
    # add review that triggered location creation
    review = params.permit(:review, :rating )

    @new_review = Review.create(rating: review[:rating], review: review[:review], group_location_id: group_location.id, user_id: @current_user.id)
    # binding.pry

    redirect_to("/groups/#{group_id}/map")

  end

  #show reviews
  #GroupLocation.find_by_group_id_and_location_id(g.id, l.id).reviews
  def show
    g_id = params[:group_id]
    l_id = params[:id]
    @reviews = GroupLocation.find_by_group_id_and_location_id(g_id, l_id).reviews

    #response for AJAX call
    respond_to do |format|
      format.html # map.html.erb
      format.json { render json: @reviews}
    end

  end


  private
  def location_params
    params.permit(:title, :lat, :lng, :address, :place_id, :website, :phone_number)
  end

end
