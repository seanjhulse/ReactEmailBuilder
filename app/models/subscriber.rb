class Subscriber < ApplicationRecord
  has_many :emails, dependent: :destroy
end
