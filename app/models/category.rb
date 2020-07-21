class Category < ApplicationRecord
  has_many :todos,
           after_add: :count_todos,
           after_remove: :count_todos,
           dependent: :destroy

  private

  def count_todos(_todo)
    update_attributes(todos_amount: todos.count)
  end
end
