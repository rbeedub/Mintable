class CreateCommits < ActiveRecord::Migration[6.1]
  def change
    create_table :commits do |t|
      t.text :quick_commit1
      t.text :quick_commit2
      t.belongs_to :workbook, null: false, foreign_key: true

      t.timestamps
    end
  end
end
