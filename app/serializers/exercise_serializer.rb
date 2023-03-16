class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :importance, :status, :my_thoughts, :next_steps
  has_one :workbook
end
