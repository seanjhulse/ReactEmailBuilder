class CreateEmails < ActiveRecord::Migration[5.1]
  def change
    create_table :emails do |t|
      t.references :subscriber, foreign_key: true
      t.string :email_address

      t.timestamps
    end
  end
end
