class Adds3q4ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s3q4, :text
  end
end
