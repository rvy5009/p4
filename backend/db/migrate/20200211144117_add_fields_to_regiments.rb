class AddFieldsToRegiments < ActiveRecord::Migration[6.0]
  def change
    add_column :regiments, :created_by, :string
  end
end
