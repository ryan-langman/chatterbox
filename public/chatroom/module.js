angular.module('chatterbox.chatroom', ['ui.router']).config(function($stateProvider){
    
    $stateProvider
        .state('app.chatroom', {
            url: '/chat',
            views: {
                content: {
                    templateUrl: 'chatroom/views/chatroom.html',
                    controller: 'ChatroomController'
                }
            }
        })

});