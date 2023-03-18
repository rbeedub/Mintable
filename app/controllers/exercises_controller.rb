class ExercisesController < ApplicationController

    def index
        render json: Exercise.all, status: :ok
    end

    def show
        render json: @exercise, status: :ok
    end

    def create
        event = Exercise.create!(exercise_params)
        render json: event, status: :created
    end

    def update
        @exercise.update!(commit_params)
        work_book = Workbook.find_by!(workbook_id: @workboook)
        render json: @event, status: :accepted
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
        params.permit(:quick_commit1, :quick_commit2)
    end

end
