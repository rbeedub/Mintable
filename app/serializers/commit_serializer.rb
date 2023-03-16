class CommitSerializer < ActiveModel::Serializer
  attributes :id, :quick_commit1, :quick_commit2
  has_one :workbook
end
