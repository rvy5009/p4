class CreateRegiments < ActiveRecord::Migration[6.0]
  def change
    create_table :regiments do |t|
      t.string :title
      t.string :image
      t.string :info
      t.timestamps
    end
  end
end
