class StakeholdersController < ApplicationController
    before_action :set_stakeholder, only: [:update, :show, :destroy]

    def index
        render json: Stakeholder.all, status: :ok
    end

    def show
        render json: @stakeholder, status: :ok
    end

    def create
        stakeholder = Stakeholder.create(stakeholder_params)
        render json: stakeholder, status: :created
    end

    def update
        @stakeholder.update!(stakeholder_params)
        render json: @stakeholder, status: :accepted
    end

    def destroy
        @stakeholder.destroy
        head :no_content
    end

    private

    def set_stakeholder
        @stakeholder = Stakeholder.find(params[:id])
    end

    def stakeholder_params
        params.permit(:id, :q1, :q2, :q3, :q4, :q5, :q6, :s2q1, :s2q2, :s2q3, :s2q4, :s2q5, :s2q6, :s3q1, :s3q2, :s3q3, :s3q4, :s3q5, :s3q6, :s4q1, :s4q2, :s4q3, :s4q4, :s4q5, :s4q6)
    end

end
