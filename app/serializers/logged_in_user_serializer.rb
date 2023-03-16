class LoggedInUserSerializer < ActiveModel::Serializer
  attributes :id,
    :name, 
    :email, 
    :username, 
    :bio, 
    :company, 
    :location_zip, 
    :location_name, 
    :photo,
    :logo,
    :manager_email, 
    :dr_email
  
    belongs_to :workbook, optional: true
    belongs_to :cohort, optional: true
end

