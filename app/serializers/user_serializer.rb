class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :seniority, :email, :direct_reports, :username, :password_digest, :bio, :location_zip, :location_name, :company, :logo, :photo, :role, :manager_email, :dr_email
  
  has_one  :workbook, optional: true
  has_one :cohort, optional: true

  # has_many :reflections

  class WorkbookSerializer < ActiveModel::Serializer
    attributes :id, :week
      has_many :reflections
      has_many :commits
      has_many :exercises
      has_many :motivations
      has_many :stakeholders
  end

end
