/*JavaScript*/
angular
  .module('BootStrap')
  .controller('homeController',['$scope',function($scope){
    $scope.toggle = false
    $scope.activeTab = 1
    $scope.setActiveTab = function(x){
      $scope.activeTab = x
    }
    $scope.show = function(){
      if(!$scope.toggle)
        $scope.toggle = true
    }
    $scope.hide = function(){
      if($scope.toggle)
        $scope.toggle = false
    }
  }])
