angular.module('ecommerce').component('cartChip',{
    templateUrl:'app/components/cart-chip/cart-chip.html',
    controllerAs:'cp',
    controller:function(cartSrvc){
        this.getLength = function(){
            return cartSrvc.getNumberItems();

        }
    }
})