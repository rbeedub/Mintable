class Adds3q6ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s3q6, :text

  end
end
