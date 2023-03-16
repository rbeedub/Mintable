class CreateWorkbooks < ActiveRecord::Migration[6.1]
  def change
    create_table :workbooks do |t|
      t.integer :week

      t.timestamps
    end
  end
end
