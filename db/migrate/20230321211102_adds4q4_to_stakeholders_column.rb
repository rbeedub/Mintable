class Adds4q4ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s4q4, :text

  end
end
