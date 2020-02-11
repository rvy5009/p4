class CreateExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.boolean :done
      t.string :image
      t.string :instructions
      t.timestamps
    end
  end
end
