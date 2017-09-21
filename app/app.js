angular.module('ecommerce', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('products', {
      url:'/products',
      templateUrl:'app/views/components/components.html',
      controller:'componentsCtrl'
    
    })
    .state('cart',{
      url:'/cart',
      templateUrl:'app/views/components/cart.html'
    })
    .state('home',{
      url:'/',
      templateUrl:'app/views/components/home.html'
    })
    $urlRouterProvider.otherwise('/');

  })