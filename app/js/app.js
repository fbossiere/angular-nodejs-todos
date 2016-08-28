var scotchTodo = angular.module('scotchTodo', []);

scotchTodo.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/todos').then(function (response) {
        $scope.todos = response.data;
        console.log(response.data);
    });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function () {
        $http.post('/api/todos', $scope.formData).then(function (response) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.todos = response.data;
            console.log(response.data);
        });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function (id) {
        $http.delete('/api/todos/' + id).then(function (response) {
            $scope.todos = response.data;
            console.log(response.data);
        });
    };
}]);