class Location < ActiveRecord::Base
  has_many :groups, through: :groupsLocations
end
