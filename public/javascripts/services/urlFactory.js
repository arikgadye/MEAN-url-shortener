myApp
.factory('urlFactory', ['$http', function($http){
		var url = {}

		url.validUrl = true;
		url.getUrls = function() {
			var promise = $http.get('/urls')
			return promise;	
		};
		url.addUrl = function(params) {
			var promise = $http.post('/urls', params )
			return promise;
		};

		url.deleteUrl = function(id) {
			var promise = $http.get('/delete/' + id)
			return promise;
		};

		return url
}]);