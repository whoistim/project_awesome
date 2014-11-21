class CreateGroupsUsers < ActiveRecord::Migration
  def change
    create_table :groups_users do |t|
      t.references :user, index: true
      t.references :group, index: true
      t.boolean :is_owner

      t.timestamps
    end
  end
end
