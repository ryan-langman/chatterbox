angular.module('chatterbox.login', ['ui.router']).config(function($stateProvider){
    
    $stateProvider
        .state('app.login', {
            url: '/',
            views: {
                content: {
                    templateUrl: 'login/views/login.html',
                    controller: 'LoginController'
                }
            }
        })

});