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
  


    has_many :workbooks
    belongs_to :cohort

    has_many :weeks, through: :workbooks
    has_many :commits, through: :weeks
    has_many :reflections, through: :weeks
    has_many :stakeholders, through: :weeks
    has_many :motivations, through: :weeks
    has_many :exercises, through: :weeks

    # class WorkbookSerializer < ActiveModel::Serializer
    # attributes :id

    # has_many :reflections
    # has_many :commits
    # has_many :exercises
    # has_many :motivations
    # has_many :stakeholders
    # end

  end

