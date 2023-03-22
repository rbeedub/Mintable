class Adds4q1ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s4q1, :text

  end
end
