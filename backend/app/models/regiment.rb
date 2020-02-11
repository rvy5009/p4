class Regiment < ApplicationRecord
  has_many :exercises, dependent: :destroy
  belongs_to :users
  validates_presence_of :title
end
