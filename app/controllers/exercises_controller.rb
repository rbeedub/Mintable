class ExercisesController < ApplicationController
    before_action :set_exercise, only: [:update, :show, :destroy]

    def index
        render json: Exercise.all, status: :ok
    end

    def show
        render json: @exercise, status: :ok
    end

    def create
        @exercise.create!(exercise_params)
        render json: exercise, status: :created
    end

    def update
        @exercise.update(exercise_params)
        work_book = Workbook.find_by!(workbook_id: @workboook)
        render json: @exercise, status: :accepted
    end

    def destroy
        @exercise.destroy
        head :no_content
    end

    private

    def set_exercise
        @exercise = Exercise.find(params[:id])
    end

    def exercise_params
        params.permit(:id, :importance, :importance2, :importance3, :importance4, :importance5, :my_thoughts, :next_steps, :status, :status2, :status3, :status4, :status5)
    end

end
