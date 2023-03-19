class WeekSerializer < ActiveModel::Serializer
  attributes :id, :week_number

  has_many :commits
  has_many :exercises
  has_many :motivations
  has_many :stakeholders
  has_many :reflections

end
