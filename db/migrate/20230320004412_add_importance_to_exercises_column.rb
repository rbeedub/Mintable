class AddImportanceToExercisesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :status2, :integer
  end
end
