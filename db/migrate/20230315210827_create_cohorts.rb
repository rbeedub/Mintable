class CreateCohorts < ActiveRecord::Migration[6.1]
  def change
    create_table :cohorts do |t|
      t.integer :date_time

      t.timestamps
    end
  end
end
