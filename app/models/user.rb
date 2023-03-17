class User < ApplicationRecord
  belongs_to :workbook, optional: true
  belongs_to :cohort, optional: true





  has_secure_password
end
