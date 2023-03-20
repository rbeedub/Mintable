class AddImportanceS5ToExercisesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :exercises, :status5, :integer
  end
end
