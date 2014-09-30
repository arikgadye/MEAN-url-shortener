var myApp = angular.module('myApp', []);

myApp.controller('UrlController', function ($scope, $http, urlFactory) {
	urlFactory.getUrls().success(function(data) {
		console.log(data)
		$scope.urls = data;
	});
	$scope.addUrl = function() {
		if ($scope.url === '') { return; }
		urlFactory.addUrl({ url: $scope.url, link: $scope.link })
		.success(function(data){
			$scope.urls.push(data);	
		}).error(function(err) {
			urlFactory.validUrl = false;
		}.bind(this));
		$scope.url = ''
		$scope.link = ''
	};

	$scope.deleteUrl = function(id) {
		urlFactory.deleteUrl(id)
		for(var i = 0; i < $scope.urls.length; i++) {
			if($scope.urls[i]._id === id) {
				$scope.urls.splice(i, 1);
				break;
			}		
		}
	}
});