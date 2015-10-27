app.controller('HomeController', ['$scope', 'redditEarthPics', function($scope, redditEarthPics) {
    $scope.pics = [];
    redditEarthPics.success(function(data) {
        $scope.pics = data.data.children; //store the data in $scope.example
    });
    
    $scope.filterJpg = function(url) {
        return url.indexOf('.jpg') === -1;
    };
}]);