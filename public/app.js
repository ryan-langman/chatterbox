$(function () {
    angular.bootstrap(document, ['chatterbox']);
});

angular.module('chatterbox', [
    'ngMessages',
    'ngSanitize',

    'ui.router',
    'ui.mask',
    'ui.bootstrap',
    'ngToast',
    'mwl.confirm',

    'chatterbox.login',
    'chatterbox.chatroom'
    ])

.config(function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'layout/layout.html',
                    controller: function($scope, $state){
                        $scope.state = $state;
                    }
                }
            }
        })

    $urlRouterProvider.otherwise('/');
});