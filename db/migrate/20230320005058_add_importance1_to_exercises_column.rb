class AddImportance1ToExercisesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :importance2, :integer
  end
end
