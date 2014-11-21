class Group < ActiveRecord::Base
  has_many :users, through: :groupsUsers
  has_many :locations, through: :groupsLocations
end
