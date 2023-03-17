class WorkbookSerializer < ActiveModel::Serializer
  attributes :id, :week

  has_one :reflection
  has_one :commit
  has_one :exercise
  has_one :motivation
  has_one :stakeholder
  

end
