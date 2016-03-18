(function(){
angular.module('app').controller('ProductsController', function($scope, $http){
  $scope.arrProds = [];//[{name:"Enroladinho"},{name:"Pastel Fritoles"}];
  var controller = this;

  $scope.getToken = function(serviceToCall) {
    var data = {
           key: 'public key',
           secret: 'private key'
     };
     console.log('entrei no getoken');

    $http({method:'POST', url:'https://3241c430-ed22-11e5-b6a3-fbb68c644a7d.app.jexia.com/',data:data})
      .success(function(data){
        console.log(data.token);
        serviceToCall(data.token);
      })
      .error(function(error){
        alert(error.message);
      });
  };

  $scope.getProducts = function() {
    console.log('entrei no getProducts');
    var doIt = function(token){$http({method:'GET',
          url:'https://3241c430-ed22-11e5-b6a3-fbb68c644a7d.app.jexia.com/product',
          headers: {'Authorization': 'Bearer '+ token}})
      .success(function(data){
          $scope.arrProds = data;
      })
      .error(function(error){
        alert(error.message);
      });
    };
    $scope.getToken(doIt);
  };
});
})();
