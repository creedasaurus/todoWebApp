angular.module('app', [])
    .controller('TodoListController', function () {
        let todoList = this;
        todoList.todos = [
            'Cool Beans',
            'Get the kids to pick up a whole lot of chips for this gnarly D&D party Im throwing',
            'Get some groceries',
            'Find a new babysitter',
            'Pay the neighbor kid to pick all the crap up in the front yard',
            'Take a hot shower'
        ];
    });