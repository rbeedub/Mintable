class CommitsController < ApplicationController

    def index
        render json: Commit.all, status: :ok
    end

    def show
        render json: @commit, status: :ok
    end

    def create
        commit = Commit.create!(commit_params)
        # SkillLevel.create!(skillable: event, skill_level: params[:skill_level])
        render json: commit, status: :created
    end

    def update
        @commit.update!(commit_params)
        work_book = Workbook.find_by!(workbook_id: @workboook)
        render json: @commit, status: :accepted
    end

    def destroy
        @commit.destroy
        head :no_content
    end

    private

    def set_commit
        @commit = Commit.find(params[:id])
    end

    def commit_params
        params.permit(:quick_commit1, :quick_commit2)
    end

end
