class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.boolean :rating
      t.text :review
      t.string :photo

      t.timestamps
    end
  end
end
