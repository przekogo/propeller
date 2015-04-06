class CreateThings < ActiveRecord::Migration
  def change
    create_table :things do |t|
        t.string :user_id
        t.string :content, null: false
    end
  end
end
