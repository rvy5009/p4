class AddRegimentsToExercises < ActiveRecord::Migration[6.0]
  def change
    add_reference :exercises, :regiment, foreign_key: true
  end
end
