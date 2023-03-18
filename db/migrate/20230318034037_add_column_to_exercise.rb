class AddColumnToExercise < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :week, :integer
  end
end
