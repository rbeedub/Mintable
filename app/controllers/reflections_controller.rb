class ReflectionsController < ApplicationController
before_action :set_reflection, only: [:update, :show, :destroy]

    def index
        render json: Reflection.all, status: :ok
    end

    def show
        render json: @reflection, status: :ok
    end

    def create
        reflection = Reflection.create!(reflection_params)
        render json: reflection, status: :created
    end

    def update
        @reflection.update!(reflection_params)
        # work_book = Workbook.find_by!(workbook_id: @workboook)
        render json: @reflection, status: :accepted
    end

    def destroy
        @reflection.destroy
        head :no_content
    end

    private

    def set_reflection
        @reflection = Reflection.find(params[:id])
    end

    def reflection_params
        params.permit(:notes, :id)
    end

end
