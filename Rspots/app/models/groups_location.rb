class GroupsLocation < ActiveRecord::Base
  belongs_to :group
  belongs_to :location
  has_many :reviews
end
