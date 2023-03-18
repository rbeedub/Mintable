class AddColumnToReflection < ActiveRecord::Migration[6.1]
  def change
    add_column :reflections, :week, :integer
  end
end
