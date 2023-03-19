class CreateMotivations < ActiveRecord::Migration[6.1]
  def change
    create_table :motivations do |t|
      t.text :personal_values1
      t.text :personal_values2
      t.text :personal_values3
      t.text :personal_values4
      t.text :personal_values5
      t.text :energized_by1
      t.text :energized_by2
      t.text :energized_by3
      t.text :energized_by4
      t.text :energized_by5
      t.text :drained_by1
      t.text :drained_by2
      t.text :drained_by3
      t.text :drained_by4
      t.text :drained_by5
      t.text :context
      t.text :motivations1
      t.text :motivations2
      t.text :motivations3
      t.text :motivations4
      t.text :motivations5
      t.belongs_to :week, null: false, foreign_key: true

      t.timestamps
    end
  end
end
