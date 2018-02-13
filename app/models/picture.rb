class Picture < ApplicationRecord
  mount_uploader :picture, MediaUploader
end
