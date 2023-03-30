class UsersController < ApplicationController

skip_before_action :authorize, only: [:create, :userDetail]

def index
    render json: User.all, status: :ok
end

def create
    @user = User.create!(user_params)
    workbook = Workbook.create!(week:1)
    @user.update(workbook: workbook)
    @user.update(cohort: Cohort.all.sample)
    @user.update(cohort: Week.all.sample)
    session[:user_id] = @user.id
    render json: @user, status: :created, serializer: LoggedInUserSerializer
end

def show
    render json: @user, status: :ok, serializer: LoggedInUserSerializer
end

def userDetail
    user = User.find_by!(id: params[:id])
    render json: user, status: :ok, serializer: LoggedInUserSerializer
end

def update
    @user.update!(user_params)
    render json: @user, status: :accepted, serializer: LoggedInUserSerializer
end

def destroy
    @user.destroy
    session.delete :user_id
    head :no_content
end

private
def set_user
    @user = User.find(params[:id])
end

def user_params
    params.permit(:name, :email, :direct_reports, :seniority, :username, :password, :password_confirmation, :bio, :location_zip, :location_name, :company, :logo, :photo, :role, :manager_email, :dr_email, :id)
end


end
