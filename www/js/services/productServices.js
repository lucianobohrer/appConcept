angular.module('app')
.factory('ProductServices', function($http){
  var apiurl, myData;
  return {
    getData: function(){
      $http.get(apiurl)
      .success(function(data, status, config, headers){
        myData = data;
      })
      .error(function(){ //handler errors here
      });
    },
    data: function() { return myData; }
  };
});
