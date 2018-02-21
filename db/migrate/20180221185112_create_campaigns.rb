class CreateCampaigns < ActiveRecord::Migration[5.1]
  def change
    create_table :campaigns do |t|
      t.references :letter, foreign_key: true
      t.string :from_address
      t.string :subject
      t.string :name
      t.references :subscriber, foreign_key: true
      t.timestamps
    end
  end
end
