class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :firstName
      t.string :lastName
      t.string :avatar
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
