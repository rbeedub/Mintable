class StakeholderSerializer < ActiveModel::Serializer
  attributes :id, :q1, :q2, :q3, :q4, :q5, :q6
  has_one :week
end
