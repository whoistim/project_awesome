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
    redirect_to root_path
  end

  # group PATCH  /groups/:id(.:format) groups#update
  #       PUT /groups/:id(.:format) groups#update
  def update
    id = params[:id]
    @group = Group.find(id)
    if @group.update(group_params)
      redirect_to root_path
    else
      #NEED FLASH
      render edit_group_path
    end

  end

  # DELETE /groups/:id(.:format) groups#destroy
  def destroy
      id = params[:id]
      @groups = Group.find(id)
      @groups.destroy
      redirect_to root_path
  end

  private
  def group_params
    params.require(:group).permit(:name, :lat, :lng)
  end


end
