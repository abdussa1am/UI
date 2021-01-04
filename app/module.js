var myninja = angular.module('myninja',[]);

myninja.controller('ninjacontroller',['$scope', function($scope){


    $scope.removeninja = function(ninja){
       
        var removeninja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removeninja, 1);
    };

    $scope.addninja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            rate: parseInt($scope.newninja.rate),
            belt: $scope.newninja.belt,
            available: true,
        });

        $scope.newninja.name= "";
        $scope.newninja.age = "";
        $scope.newninja.exp = "";
    }
 
    $scope.ninjas = [
        {
            product: "Shirt",
            price: "34",
            color: "yellow",
            available:true,
        },
        {
            product: "Shoes",
            price: "54",
            color: "red",
            available:true,
        },
        {
            product: "Pent",
            price: "44",
            color: "brown",
            available:true,
        },
        {
            product: "ali",
            price: "54",
            color: "yellow",
            available:true,
        },
      ]

}])


