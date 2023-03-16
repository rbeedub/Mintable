class User < ApplicationRecord
  belongs_to :workbook
  belongs_to :cohort

  has_secure_password
end
