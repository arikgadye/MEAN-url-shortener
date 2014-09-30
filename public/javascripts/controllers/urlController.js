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
	}
});
	
