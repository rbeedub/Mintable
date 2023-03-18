class WorkbooksController < ApplicationController
before_action :set_workbook, except: [:index, :create]

    def index
        render json: Workbook.all, status: :ok
    end

    def show
        render json: @workbook, status: :ok
    end

    def create
        event = Workbook.create!(stakeholder_params)
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

    def set_workbook
        @workbook = Workbook.find(params[:id])
    end

    def stakeholder_params
        params.permit(:q1, :q2, :q3, :q4, :q5, :q6)
    end


end
