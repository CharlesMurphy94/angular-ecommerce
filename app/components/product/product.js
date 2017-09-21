angular.module('ecommerce').component('product',{
  templateUrl:'/app/components/product/product.html',
  bindings:{
    product:"<",
    canAddProduct:"<"
  },
  controllerAs:'pd',
  controller: function(cartSrvc){
    this.addItem = function(){
      cartSrvc.addItem(this.product);
      
    }
  }
})
