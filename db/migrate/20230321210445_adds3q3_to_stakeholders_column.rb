class Adds3q3ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s3q3, :text
  end
end
