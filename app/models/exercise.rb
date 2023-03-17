class Exercise < ApplicationRecord
  belongs_to :workbook
  has_many :users, through: :workbooks

end
