(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('alienlab', [
        "ui.router", 'toaster', "ngAnimate", "ngCookies", "ngStorage", "ngResource","ui.bootstrap", "ui.bootstrap.datetimepicker"
    ]).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', '$urlMatcherFactoryProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $urlMatcherFactoryProvider) {//路由定义
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('stuindex', {
                    url: '/stuindex',
                    templateUrl: 'views/stuindex.html',
                    controller: "stuindexController"
                })
                .state('stuevaluate', {
                    url: '/stuevaluate/:scheId',
                    templateUrl: 'views/stuevaluate.html',
                    controller: "stuevaluateController"
                })

        }])
    ;
})();

(function () {
    'use strict';
    // DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE
    angular
        .module('alienlab')
        .constant('smsurl', "http://test.moistmedia.net/catpowerserver/api/sendsms")
        // .constant('tokenUrl', "http://localhost:8082/api/authenticate/client")
        // .constant('domain',"http://localhost:8082/")
        // .constant('rootpath',"http://localhost:8082/activitywechat/")
        .constant('tokenUrl', "http://test.moistmedia.net/catpowerserver/api/authenticate")
        .constant('domain', "http://test.moistmedia.net/catpowerserver/")
        .constant('rootpath', "http://test.moistmedia.net/catpowerwechat/")
        // .constant('tokenUrl', "http://test.moistmedia.net/ziranliserver/api/authenticate")
        // .constant('domain',"http://test.moistmedia.net/ziranliserver/")
        // .constant('rootpath',"http://test.moistmedia.net/ziranliwechat/")
        .constant('homePage', "stuindex")
        .constant('wechatappid', "wxd5ceca5e98cb548d")
        .constant('runmodal', "prod")
    ;
})();



