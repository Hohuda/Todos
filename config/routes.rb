Rails.application.routes.draw do
  root 'api/v1/categories#index'

  namespace :api do
    namespace :v1 do
      resources :categories do
        resources :todos
      end
    end
  end
end
