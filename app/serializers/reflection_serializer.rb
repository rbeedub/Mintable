class ReflectionSerializer < ActiveModel::Serializer
  attributes :id, :notes
  has_one :week

end
