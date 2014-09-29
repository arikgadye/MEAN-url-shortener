myApp
.factory('urlFactory', ['$http', function($http){
		var url = {}

		url.getUrls = function() {
			var promise = $http.get('/urls')
			return promise;
		}
		url.addUrl = function(params) {
			var promise = $http.post('/urls', params )
			return promise;
			console.log(promise)
		}

		return url
}]);