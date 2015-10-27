app.directive('picArd', function() { 
  return { 
    restrict: 'E', //create new element
    scope: { 
      pic: '=', //can pass in stuff with info="" attribute
      id: '=',
    }, 
    templateUrl: 'js/directives/card.html', //the template for the directive
  }; 
});