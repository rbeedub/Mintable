class MotivationSerializer < ActiveModel::Serializer
  attributes :id, :personal_values1, :personal_values2, :personal_values3, :personal_values4, :personal_values5, :energized_by1, :energized_by2, :energized_by3, :energized_by4, :energized_by5, :drained_by1, :drained_by2, :drained_by3, :drained_by4, :drained_by5, :context, :motivations1, :motivations2, :motivations3, :motivations4, :motivations5
  has_one :workbook
end
