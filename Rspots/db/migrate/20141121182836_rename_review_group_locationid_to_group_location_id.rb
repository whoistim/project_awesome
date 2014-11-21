class RenameReviewGroupLocationidToGroupLocationId < ActiveRecord::Migration
  def change
    rename_column :reviews, :groupLocation_id, :group_location_id
  end
end
