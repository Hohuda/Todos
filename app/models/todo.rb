class Todo < ApplicationRecord
  belongs_to :category

  def done?
    done
  end
end
