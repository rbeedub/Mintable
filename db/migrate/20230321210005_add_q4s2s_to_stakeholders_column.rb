class AddQ4s2sToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s2q4, :text
  end
end
