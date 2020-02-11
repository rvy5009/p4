class Exercise < ApplicationRecord
  belongs_to :regiments
  belongs_to :users
  validates_presence_of :name
end
