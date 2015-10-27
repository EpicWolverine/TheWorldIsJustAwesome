app.factory('redditEarthPics', ['$http', function($http) { 
  return $http.get('https://www.reddit.com/r/earthporn.json') 
  //return $http.get('https://www.reddit.com/r/earthporn/top.json?sort=top&t=week') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);