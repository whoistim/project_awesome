class UserController < ApplicationController
  before_action :current_user
  def profile
    @groups = @current_user.groups
  end
end
