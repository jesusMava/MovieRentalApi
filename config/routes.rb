Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users', to: 'users#index'
      post 'users', to: 'users#create'

      get 'movies', to: 'movies#index'
      post 'movies', to: 'movies#create'

      get 'history', to: 'history#index'
      post 'history', to: 'history#assing_movie'
      post 'get_history', to: 'history#get_history'
      post 'change_value', to: 'history#change_value'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
