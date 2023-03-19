class CreateStakeholders < ActiveRecord::Migration[6.1]
  def change
    create_table :stakeholders do |t|
      t.text :q1
      t.text :q2
      t.text :q3
      t.text :q4
      t.text :q5
      t.text :q6
      t.belongs_to :week, null: false, foreign_key: true

      t.timestamps
    end
  end
end
