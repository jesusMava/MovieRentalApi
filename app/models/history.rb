class History < ApplicationRecord
  belongs_to :movie
  belongs_to :user
  validates :movie, :user, presence: true
end
