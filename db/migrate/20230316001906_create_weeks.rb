class CreateWeeks < ActiveRecord::Migration[6.1]
  def change
    create_table :weeks do |t|
      t.belongs_to :workbook, null: false, foreign_key: true
      t.timestamps
    end
  end
end
