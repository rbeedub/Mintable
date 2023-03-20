class AddImportanceS4ToExercisesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :status4, :integer
  end
end
