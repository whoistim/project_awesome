class Review < ActiveRecord::Base
  belongs_to :group_location
  belongs_to :user

  def get_location_reviews(location)

  end

end
