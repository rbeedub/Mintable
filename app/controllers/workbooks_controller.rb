class WorkbooksController < ApplicationController
before_action :set_workbook, except: [:index, :create]

    def index
        render json: Workbook.all, status: :ok
    end

    def show
        render json: @workbook, status: :ok
    end

    def create
        workbook = Workbook.create!(workbook_params)
        render json: workbook, status: :created
    end

    def update
        @workbook.update!(workbook_params)
        work_book = Workbook.find_by!(workbook_id: @workboook)
        render json: @workbook, status: :accepted
    end

    def destroy
        @workbook.destroy
        head :no_content
    end

    private

    def set_workbook
        @workbook = Workbook.find(params[:id])
    end

    def stakeholder_params
        params.permit(:week)
    end


end
