'use strict';

define(['angular'],function(angular){
    return angular.module('app').controller('homeController', ['$scope', function($scope){
        $scope.title="home page";
    }]);
});