app.controller('PhotoController', ['$scope', 'redditEarthPics', '$routeParams', function($scope, redditEarthPics, $routeParams) {
    redditEarthPics.success(function(data) {
        $scope.detail = data.data.children[$routeParams.id]; //store the data in $scope.example
    });
    
    $scope.filterJpg = function(url) {
        return url.indexOf('.jpg') === -1;
    };
}]);