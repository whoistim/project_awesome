class UserController < ApplicationController
  before_action :current_user
  def profile
    if @current_user
      @groups = @current_user.groups
    end
  end #end profile route

end
