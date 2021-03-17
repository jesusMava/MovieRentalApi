Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users', to: 'users#index'
      post 'users', to: 'users#create'

      get 'movies', to: 'movies#index'
      post 'movies', to: 'movies#create'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
