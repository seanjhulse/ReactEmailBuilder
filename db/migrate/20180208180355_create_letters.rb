class CreateLetters < ActiveRecord::Migration[5.1]
  def change
    create_table :letters do |t|
      t.string :subject
      t.text :to_address
      t.text :from_address
      t.text :preview_address
      t.text :letter
      t.timestamps
    end
  end
end
