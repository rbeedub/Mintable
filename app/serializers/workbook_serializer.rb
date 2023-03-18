class WorkbookSerializer < ActiveModel::Serializer
  attributes :id, :week
  has_many :reflections
  has_many :commits
  has_many :exercises
  has_many :motivations
  has_many :stakeholders
end
