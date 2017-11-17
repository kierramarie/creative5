angular.module('library', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.books = [];
     $scope.create = function(book) {
        return $http.post('/books', book).success(function(data){
        $scope.books.push(data);
      });
    };
    $scope.addBook = function() {
      var newbook = {title:$scope.formContent};
      $scope.create(newbook);
      $scope.formContent = "";
    };
    $scope.getAll = function() {
      return $http.get('/books').success(function(data){
        angular.copy(data, $scope.books);
      });
    };
    $scope.getAll();
    $scope.delete = function(book) {
      $http.delete('/books/' + book._id )
        .success(function(data){
          console.log("delete worked");
        });
      $scope.getAll();
    };

  }
]);
