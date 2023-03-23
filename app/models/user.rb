class User < ApplicationRecord
  belongs_to :cohort, optional: true
  has_many :workbooks, dependent: :destroy
  has_many :weeks, through: :workbooks, dependent: :destroy
  has_many :commits, through: :weeks
  has_many :reflections, through: :weeks
  has_many :stakeholders, through: :weeks
  has_many :motivations, through: :weeks
  has_many :exercises, through: :weeks







  has_secure_password
end
