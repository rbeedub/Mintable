class CreateWorkbooks < ActiveRecord::Migration[6.1]
  def change
    create_table :workbooks do |t|
      t.belongs_to :user, null: true, foreign_key: true
      t.timestamps
    end
  end
end
