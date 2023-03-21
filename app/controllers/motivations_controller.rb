class MotivationsController < ApplicationController

    before_action :set_motivation, only: [:update, :show, :destroy]

    def index
        render json: Motivation.all, status: :ok
    end

    def show
        render json: @motivation, status: :ok
    end

    def create
        motivation = Motivation.create!(motivation_params)
        render json: motivation, status: :created
    end

    def update
        # motivation = Motivation.find(params[:id])
        @motivation.update!(motivation_params)
        # work_book = Workbook.find_by!(workbook_id: @workboook)
        render json: @motivation, status: :accepted
    end

    def destroy
        @motivation.destroy
        head :no_content
    end

    private

    def set_motivation
       @motivation= Motivation.find(params[:id])
    end

    def motivation_params
        params.permit(:id, :personal_values1, :personal_values2, :personal_values3, :personal_values4, :personal_values5, :energized_by1, :energized_by2, :energized_by3, :energized_by4, :energized_by5, :drained_by1, :drained_by2, :drained_by3, :drained_by4, :drained_by5, :context, :motivations1, :motivations2, :motivations3, :motivations4, :motivations5 )
    end
end
