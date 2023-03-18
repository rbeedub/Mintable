class WeekSerializer < ActiveModel::Serializer
  attributes :id, :date_time, :week

  # has_many :commits
  # has_many :exercises
  # has_many :motivations
  # has_many :stakeholders
  # has_many :reflections

end
