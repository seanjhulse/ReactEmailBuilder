Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  resources :templates
  resources :letters

  # MediaUploader actions for AWS bucket
  post 'upload_image' => 'media#upload_image'
  get  'get_images' => 'media#get_images'

  post 'test_email' => 'letters#test_email'
end
