class AddImportance3ToExercisesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :importance3, :integer
  end
end
