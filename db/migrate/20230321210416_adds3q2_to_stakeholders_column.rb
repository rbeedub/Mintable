class Adds3q2ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s3q2, :text

  end
end
