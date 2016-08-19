class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :body
      t.integer :status, default: 0

      t.timestamps
    end
  end
end