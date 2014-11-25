class UserController < ApplicationController
  before_action :current_user
  def profile
    if @current_user
      #@groups = @current_user.groups

      groups = @current_user.groups.partition do |group|
      	group.is_owned_by_user?(@current_user)
      end

      @groups_owned_by_current_user = groups[0]
      @groups_not_owned_by_current_user = groups[1]
    end
  end #end profile route
end
