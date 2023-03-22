class Adds4q5ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s4q5, :text
  end
end
