class Week < ApplicationRecord
  has_many :commits
  has_many :exercises
  has_many :motivations
  has_many :stakeholders
  has_many :reflections
  
  belongs_to :workbook
end
