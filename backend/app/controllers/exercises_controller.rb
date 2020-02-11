class ExercisesController < ApplicationController
  before_action :set_regiment
  before_action :set_regiment_exercise, only: [:show, :update, :destroy]

  # GET /todos/:todo_id/items
  def index
    json_response(@regiment.items)
  end

  # GET /todos/:todo_id/items/:id
  def show
    json_response(@exercise)
  end

  # POST /todos/:todo_id/items
  def create
    @regiment.exercises.create!(exercise_params)
    json_response(status: "SUCCESS", message: 'item created successfully.', data: @exercise.name)

  end

  # PUT /todos/:todo_id/items/:id
  def update
    @exercise.update(exercise_params)
    json_response(status: 'SUCCESS', message: 'item updated successfully.', data: @exercise.name)
  end

  # DELETE /todos/:todo_id/items/:id
  def destroy
    @exercise.destroy
    json_response(status: 'SUCCESS', message: 'item deleted successfully.', data: @exercise.name)
  end

  private

  def exercise_params
    params.permit(:name)
  end

  def set_regiment
    @regiment = Regiment.find(params[:regiment_id])
  end

  def set_regiment_exercise
    @exercise = @regiment.exercises.find_by!(id: params[:id]) if @regiment
  end
end