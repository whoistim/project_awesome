class Group < ActiveRecord::Base
  has_many :group_users
  has_many :users, through: :group_users

  has_many :group_locations
  has_many :locations, through: :group_locations

  def is_owned_by_user?(user)
    #locate group_users record for group & user_id
    GroupUser.find_by_group_id_and_user_id(self, user).is_owner
  end

end
