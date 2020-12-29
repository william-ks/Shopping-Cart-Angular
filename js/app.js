var app = angular.module("shoppingList", []);

app.controller("myCtrl", function($scope) {

    $scope.products = ["Sorvete", "Abacate"];

    $scope.addItem = function () {
        $scope.errortext = "";

        if (!$scope.add) {return;}

        if ($scope.products.indexOf($scope.add) == -1) {
            $scope.products.push($scope.add);

        } else {
            $scope.errortext = "The item is already in your shopping list.";
            alert($scope.errortext);
        }

    }

  $scope.removeItem = function (x) {
    $scope.products.splice(x, 1);
  }

});