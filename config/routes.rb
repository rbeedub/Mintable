Rails.application.routes.draw do

  resources :users
  resources :motivations
  resources :commits
  resources :exercises
  resources :reflections
  resources :workbooks

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/userDetail/:id', to: 'users#userDetail'

  # Defines the root path route ("/")
  # root "articles#index"
end
