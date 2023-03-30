class CommitsController < ApplicationController
    before_action :set_commit, only: [:update, :show, :destroy]

    def index
        render json: Commit.all, status: :ok
    end

    def show
        render json: @commit, status: :ok
    end

    def create
        @commit.create!(commit_params)
        render json: commit, status: :created
    end

    def update
        @commit.update!(commit_params)
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
        params.permit(:quick_commit1, :quick_commit2, :id)
    end

end
