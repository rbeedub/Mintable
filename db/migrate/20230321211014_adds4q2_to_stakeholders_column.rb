class Adds4q2ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s4q2, :text

  end
end
