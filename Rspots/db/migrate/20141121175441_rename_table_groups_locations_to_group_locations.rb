class RenameTableGroupsLocationsToGroupLocations < ActiveRecord::Migration
  def change
    rename_table :groups_locations, :group_locations
  end
end
