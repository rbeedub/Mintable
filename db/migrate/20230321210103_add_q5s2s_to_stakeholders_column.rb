class AddQ5s2sToStakeholdersColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :stakeholders, :s2q5, :text

  end
end
