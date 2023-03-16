class CreateReflections < ActiveRecord::Migration[6.1]
  def change
    create_table :reflections do |t|
      t.text :notes
      t.belongs_to :workbook, null: false, foreign_key: true

      t.timestamps
    end
  end
end
