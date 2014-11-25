Rails.application.routes.draw do

  # root route
  root 'user#profile'

  # user route
  get 'user/profile'

  get 'home/index'
  get 'home/about'
  get 'home/faq'

  # Groups Resources & additional routes for leave and map
  resources :groups, only: [:new, :edit, :create, :update, :destroy] do
    resources :locations, only: [:create, :show]
    resources :reviews, only: [:create]
  end

  # Additional groups routes
  delete 'groups/:id/leave', to: 'groups#leave', as: 'leave_group'
  get 'groups/:id/map', to: 'groups#map', as: 'group_map'

  # # Locations routes
  # post 'locations', to: 'locations#create', as: 'new_location'

  #OMNIAUTH ROUTES
  match 'auth/:provider/callback', to: 'sessions#create', via: :get
  match 'auth/failure', to: redirect('/'), via: :get
  match 'signout', to: 'sessions#destroy', as: 'signout', via: :get

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
