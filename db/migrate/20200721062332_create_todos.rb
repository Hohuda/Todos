class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.text :description
      t.boolean :done, default: false
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
