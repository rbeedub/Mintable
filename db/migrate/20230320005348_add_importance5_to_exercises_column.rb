class AddImportance5ToExercisesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :importance5, :integer
  end
end
