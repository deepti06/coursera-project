(function(){
    'use strict'
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',DIController);

    DIController.$inject = ['$scope'];
    function DIController($scope){
        $scope.dishes = "";
        $scope.message = "";
        $scope.checkCalorie = function(){
            var str = $scope.dishes;
            var msg="";
            var arr = str.split(',');
            if(str == "")
                msg = "Please enter data first";
            else if(arr.length <=3)
                msg ="Enjoy!";
            else
                msg ="Too much!";
            $scope.message = msg;
        }
    }
})();