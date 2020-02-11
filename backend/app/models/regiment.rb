class Regiment < ApplicationRecord
  has_many :exercises, dependent: :destroy
  validates_presence_of :title
end
