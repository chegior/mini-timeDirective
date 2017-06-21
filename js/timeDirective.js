angular.module('timeApp').directive('showTime',function(){

  return {
    template:'<div>The Current time is {{time}}</div>',
    restrict: 'E',//this can be only use as an statement
    link: function(scope, element, attrs){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }

  }


})
