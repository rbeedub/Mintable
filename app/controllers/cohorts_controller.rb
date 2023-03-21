class CohortsController < ApplicationController

    def index
        render json: Cohort.all, status: :ok
    end

    def show
        render json: @cohort, status: :ok
    end

    def create
        cohort = Cohort.create!(cohort_params)
        render json: cohort, status: :created
    end


    def destroy
        @cohort.destroy
        head :no_content
    end

    private

    def set_cohort
        @cohort = Cohort.find(params[:id])
    end

    def cohort_params
        params.permit(:date_time)
    end

end


end
