Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  resources :templates
  resources :letters
  resources :pictures
  resources :campaigns
  resources :subscribers

  # MediaUploader actions for AWS bucket
  post 'upload_image' => 'media#upload_image'
  get  'get_images' => 'media#get_images'

  # Letters testing email (preview mode)
  post 'test_email' => 'letters#test_email'

  # Campaigns REAL LIVE EMAIL route
  put 'campaigns/:id/send', to: 'campaigns#send_campaign_mail', as: 'send_campaign_email'
end
