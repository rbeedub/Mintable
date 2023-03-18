class AddColumnToCommit < ActiveRecord::Migration[6.1]
  def change
    add_column :commits, :week, :integer
  end
end
