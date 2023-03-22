class Adds4q6ToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s4q6, :text

  end
end
