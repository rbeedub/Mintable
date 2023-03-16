class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :seniority
      t.string :email
      t.integer :direct_reports
      t.string :username
      t.string :password_digest
      t.text :bio
      t.integer :location_zip
      t.string :location_name
      t.string :company
      t.string :logo
      t.string :photo
      t.integer :role
      t.string :manager_email
      t.string :dr_email
      t.belongs_to :workbook, null: false, foreign_key: true
      t.belongs_to :cohort, null: false, foreign_key: true

      t.timestamps
    end
  end
end
