class RegimentsController < ApplicationController
  before_action :set_regiment, only: [:show, :update, :destroy]

  def index
    @regiments = current_user.regiments
    json_response(@regiments)
  end

  def create
    @regiment = current_user.regiments.create!(regiment_params)
    json_response(@regiment, :created)
  end

  def show
    json_response(@regiment)
  end

  def update
    @regiment.update(regiment_params)
    json_response(status: 'SUCCESS', message: 'updated the todo', data: @regiment.title)
  end

  def destroy
    @regiment.destroy
    json_response(status: 'SUCCESS', message: 'deleted the todo', data: @regiments.title)

  end

  private

  def regiment_params
    params.permit(:title, :created_by)
  end

  def set_regiment
    @regiment = Regiment.find(params[:id])
  end
end
