class ReflectionsController < ApplicationController

    def index
        render json: Reflection.all, status: :ok
    end

    def show
        render json: @reflection, status: :ok
    end

    def create
        event = Reflection.create!(reflection_params)
        render json: event, status: :created
    end

    def update
        @reflection.update!(reflection_params)
        work_book = Workbook.find_by!(workbook_id: @workboook)
        render json: @event, status: :accepted
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
        params.permit(:notes)
    end

end
