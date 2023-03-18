class User < ApplicationRecord
  belongs_to :workbook
  belongs_to :cohort, optional: true

  # has_many :reflections, through: :workbooks





  has_secure_password
end
