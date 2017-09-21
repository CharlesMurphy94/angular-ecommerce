angular.module('ecommerce').component('cart',{
  templateUrl:'app/components/cart/cart.html',
  controllerAs:'ct',
  controller:function(cartSrvc){
    this.cart = cartSrvc.getCart();
    this.getTotal = cartSrvc.getTotal;
  }
})