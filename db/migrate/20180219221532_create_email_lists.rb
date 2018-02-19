class CreateEmailLists < ActiveRecord::Migration[5.1]
  def change
    create_table :email_lists do |t|
      t.string :name
      t.text :emails

      t.timestamps
    end
  end
end
