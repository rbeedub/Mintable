class Cohort < ApplicationRecord
    has_many :users
    has_many :workbooks, through: :users
end
