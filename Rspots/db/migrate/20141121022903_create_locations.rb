class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :title
      t.string :lat
      t.string :lng
      t.string :address
      t.string :place_id
      t.string :website
      t.string :phone_number

      t.timestamps
    end
  end
end
