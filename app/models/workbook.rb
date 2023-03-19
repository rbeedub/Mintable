class Workbook < ApplicationRecord
    belongs_to :user
    has_many :cohorts, through: :users
    has_many :weeks


    has_many :motivations 
    has_many :exercises
    has_many :commits
    has_many :reflections
    has_many :stakeholders
end
