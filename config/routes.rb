Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categories do
        resources :todos
      end
    end
  end
end
