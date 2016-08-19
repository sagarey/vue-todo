Rails.application.routes.draw do
	
	root	'todos#index'

  resources :todos do
  	member do
      post 'active'
      post 'completed'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
