class Exercise < ApplicationRecord
  belongs_to :regiments
  validates_presence_of :name
end
