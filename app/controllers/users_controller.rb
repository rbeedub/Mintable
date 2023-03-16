class UsersController < ApplicationController
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
        end

    private 
    def user_params
        params.permit(:name, :email, :direct_reports, :username, :password, :password_confirmation, :bio, :location_zip, :location_name, :company, :logo, :photo, :role, :manager_email, :dr_email)
    end


end
