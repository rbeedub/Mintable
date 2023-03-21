class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :importance, :importance2, :importance3, :importance4, :importance5, :status, :status2, :status3, :status4, :status5, :my_thoughts, :next_steps
  has_one :week
end
