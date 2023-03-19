class WorkbookSerializer < ActiveModel::Serializer
  attributes :id

  has_many :reflections
  has_many :commits
  has_many :exercises
  has_many :motivations
  has_many :stakeholders
end
