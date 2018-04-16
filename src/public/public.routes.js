(function(){
    'use strict';

    angular.module('public')
           .config(routeConfig);

    //Configure the routes and views
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider){
        //Routes
        $stateProvider
            .transition('public',{
                abstract: true,
                templateUrl:'src/public/public.html'
            })
            .transition('public.home',{
                url:'/',
                templateUrl:'src/public/home/home.html'
            });
    //for checking github
    }
})();