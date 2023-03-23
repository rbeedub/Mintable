class Week < ApplicationRecord
  has_many :commits, dependent: :destroy
  has_many :exercises, dependent: :destroy
  has_many :motivations, dependent: :destroy
  has_many :stakeholders, dependent: :destroy
  has_many :reflections, dependent: :destroy
  
  belongs_to :workbook
end
