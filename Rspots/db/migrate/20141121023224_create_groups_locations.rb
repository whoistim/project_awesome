class CreateGroupsLocations < ActiveRecord::Migration
  def change
    create_table :groups_locations do |t|
      t.references :group, index: true
      t.references :location, index: true

      t.timestamps
    end
  end
end
