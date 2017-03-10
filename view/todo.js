/**
 * You must include the dependency on 'ngMaterial'
 */
angular.module('todoApp', ['ngMaterial'])
    .controller('TodoListCtrl', function ($scope) {
        $scope.todos = [
            { text: 'Get some milk', done: false },
            { text: 'Find a new apartment', done: true },
            { text: 'Get some new shoes or something', done: false },
            { text: 'Finish filing taxes', done: false },
            { text: 'Pay the neighbor kids to pick up the dog crap', done: false }
        ];
    });