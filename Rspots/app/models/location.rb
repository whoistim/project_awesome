class Location < ActiveRecord::Base
  has_many :group_locations
  has_many :groups, through: :group_locations
end
