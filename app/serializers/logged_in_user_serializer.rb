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
  


    belongs_to :workbook
    belongs_to :cohort

    class WorkbookSerializer < ActiveModel::Serializer
      attributes :id, :week
        has_many :reflections
        has_many :commits
        has_many :exercises
        has_many :motivations
        has_many :stakeholders
    end

  end

