class Todo < ApplicationRecord
	validates_presence_of :body
	enum status: { active: 0, completed: 1 }
end
