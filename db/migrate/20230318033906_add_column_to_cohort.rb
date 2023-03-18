class AddColumnToCohort < ActiveRecord::Migration[6.1]
  def change
    add_column :cohorts, :week, :integer
  end
end
