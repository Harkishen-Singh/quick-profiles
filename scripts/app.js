'use strict';

const app = angular.module('quick-profiles', ['ngRoute']);

app.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './components/test.html',
        controller: 'test-contr'
      })
      .when('/view', {
        templateUrl: './components/view.html',
        controller: 'test-view'
      });
  }
]);

app.controller('test-contr', [
  '$scope',
  function($scope) {
    console.warn('inside the test-contr');
  }
]);

app.controller('test-view', [
  '$scope',
  function($scope) {
    console.warn('inside the test-view');
  }
]);
