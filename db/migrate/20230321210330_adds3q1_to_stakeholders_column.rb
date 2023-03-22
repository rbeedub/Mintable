class Adds3q1ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s3q1, :text

  end
end
