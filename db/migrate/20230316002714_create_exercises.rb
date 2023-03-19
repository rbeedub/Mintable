class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.integer :importance
      t.integer :status
      t.text :my_thoughts
      t.text :next_steps
      t.belongs_to :week, null: false, foreign_key: true

      t.timestamps
    end
  end
end
