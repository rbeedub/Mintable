class AddQ3s2sToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s2q3, :text
  end
end
