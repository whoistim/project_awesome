class Review < ActiveRecord::Base
  belongs_to :group_location
  belongs_to :user
end
