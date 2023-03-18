class AddColumnToMotivation < ActiveRecord::Migration[6.1]
  def change
    add_column :motivations, :week, :integer
  end
end
