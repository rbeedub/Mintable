class AddImportance4ToExercisesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :importance4, :integer
  end
end
