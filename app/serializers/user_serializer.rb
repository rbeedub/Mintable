class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :seniority, :email, :direct_reports, :username, :password_digest, :bio, :location_zip, :location_name, :company, :logo, :photo, :role, :manager_email, :dr_email
  has_one :workbook
  has_one :cohort
end
