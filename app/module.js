var myninja = angular.module('myninja',[]);

myninja.controller('ninjacontroller',['$scope', function($scope){


    $scope.removeninja = function(ninja){
       
        var removeninja = $scope.fil.indexOf(ninja);
        $scope.fil.splice(removeninja, 1);
    };

    $scope.addninja = function(){
        $scope.fil.push({
            product: $scope.newninja.product,
            price: $scope.newninja.price,
            color: $scope.newninja.color,
        });

        $scope.newninja.product= "";
        $scope.newninja.price = "";
        $scope.newninja.color = "";
    }
 
    $scope.fil = [
        {
            product: "Shirt",
            price: "34",
            color: "yellow",
        },
        {
            product: "Shoes",
            price: "54",
            color: "red",
        },
        {
            product: "Pent",
            price: "44",
            color: "brown",
        },
        {
            product: "ali",
            price: "54",
            color: "yellow",
        },
      ]

}])


