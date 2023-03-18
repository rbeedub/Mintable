class StakeholdersController < ApplicationController

    def index
        render json: Stakeholder.all, status: :ok
    end

    def show
        render json: @stakeholder, status: :ok
    end

    def create
        event = Stakeholder.create!(stakeholder_params)
        render json: event, status: :created
    end

    def update
        @stakeholder.update!(stakeholder_params)
        work_book = Workbook.find_by!(workbook_id: @workboook)
        render json: @event, status: :accepted
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
        params.permit(:q1, :q2, :q3, :q4, :q5, :q6)
    end

end
