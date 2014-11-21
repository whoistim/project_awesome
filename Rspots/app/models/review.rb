class Review < ActiveRecord::Base
  belongs_to :groupLocation
  belongs_to :user
end
