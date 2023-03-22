class AddQ2s2sToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s2q2, :text

  end
end
