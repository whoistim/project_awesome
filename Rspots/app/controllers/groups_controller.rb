class GroupsController < ApplicationController
  before_action :current_user

  # edit_group GET /groups/:id/edit(.:format) groups#edit
  def edit
    id = params[:id]
    @group = Group.find_by_id(id)
  end

  # new_group GET /groups/new(.:format) groups#new
  def new
    @group = Group.new
  end

  # groups POST /groups(.:format) groups#create
  def create
    group = params.require(:group).permit(:name, :lat, :lng)
    new_group = Group.create(group)
    GroupUser.create(group_id: new_group.id, user_id: @current_user.id, is_owner: true)
    flash[:success] = "You're Group has been created!"
    redirect_to root_path
  end

  # group PATCH  /groups/:id(.:format) groups#update
  #       PUT /groups/:id(.:format) groups#update
  def update
    id = params[:id]
    @group = Group.find(id)
    if @group.update(group_params)
      flash[:success] = "Your Group has been updated"
      redirect_to root_path
    else
      flash[:alert] = "Input not valid. Please fill out all fields."
      render edit_group_path
    end

  end

  # DELETE /groups/:id(.:format) groups#destroy
  def destroy
    id = params[:id]
    @group = Group.find(id)
    if @group.destroy
      flash[:notice] = "Group has been deleted."
      redirect_to root_path
    else
      flash.now[:alert] = "Unable to delete group" #flash now to not display twice
      render root_path
    end

  end

  # leave_group DELETE /groups/leave/:id(.:format) groups#leave
  def leave
    id = params[:id]
    @group = Group.find(id)
    if @group.group_users.find_by_user_id(@current_user.id).destroy  #find user in GroupUser and delete
      flash[:notice] = "You have left this group."
      redirect_to root_path
    else
      flash.now[:alert] = "You cannot leave. Sorry."
      render root_path
    end
  end

  def map
    id = params[:id]
    @group = Group.find_by_id(id) #will use to pass id into page for AJAX
    @locations = @group.locations #calls locations for group
    respond_to do |format|
      format.html # map.html.erb
      format.json { render json: @locations}
    end
  end


  private
  def group_params
    params.require(:group).permit(:name, :lat, :lng)
  end


end
