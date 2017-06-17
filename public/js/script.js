angular.module("App", ['ngMaterial'])
    .controller("HelloController", function($scope, $http, $window, $mdDialog, $mdToast) {
        'ngReact';
        //Global Declarations
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;

        //Login
        $scope.mailLogin = "";
        $scope.passLogin = "";

        this.login = function() {
						console.log("called");
            $http.post('http://localhost/loginUser', {
                "email": this.$scope.mailLogin,
                "password": this.$scope.passLogin
            }).then(function(success) {
                console.log(success.data);
            }, function(error) {
                console.log(error);
            });
        }

				$scope.mailReg = "";
				$scope.passReg = "";
				$scope.passConfReg = "";

        this.register = function() {
            $http.post('http://localhost/registerUser', {
                "email": this.$scope.mailReg,
                "password": this.$scope.passReg,
                "passwordConfirm": this.$scope.passConfReg
            }).then(function(success) {
                console.log(success.data);
            }, function(error) {
                console.log(error);
            });
        }

        //Logout
        this.logout = function() {
            $http.post('http://localhost/logout').then(function(success) {
                console.log("Logout");
                console.log(success);
                //window.location.href = '/admin';
            }, function(error) {
                console.log(error);
            });
        }
    });
