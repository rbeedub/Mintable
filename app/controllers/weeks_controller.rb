class WeeksController < ApplicationController

skip_before_action :authorize, only: [:create]

def index
    render json: Week.all, status: :ok
end


def show
    render json: @week, status: :ok
end


def update
    @week.update!(week_params)
    render json: @week, status: :accepted
end

def destroy
    @week.destroy
    head :no_content
end

private
def set_week
    @week = Week.find(params[:id])
end

def user_params
    params.permit(:date_time, :week)
end



end
