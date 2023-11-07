// app.js
var app = angular.module('myApp', []);

app.controller('BannerController', function($scope) {
    $scope.bannerTitle = 'Física';
    $scope.bannerText = 'Explorando el mundo a través de las leyes de la naturaleza';
});