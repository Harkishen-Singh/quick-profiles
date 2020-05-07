'use strict';

const app = angular.module('quick-profiles', ['ngRoute']);

app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './components/main.html',
        controller: 'main-controller'
      })
      .when('/view', {
        templateUrl: './components/view.html',
        controller: 'test-view'
      });
  }
]);

app.controller('main-controller', [
  '$scope',
  function($scope) {
    console.warn('inside the main-contr');
  }
]);

app.controller('test-view', [
  '$scope',
  function($scope) {
    console.warn('inside the test-view');
  }
]);
