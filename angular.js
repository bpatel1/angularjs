var myApp = angular.module('myApp', ['ngRoute']);

	myApp.controller('productController', function($scope,getFactory,$http)  {
		        
        $scope.items = [];
        getFactory.getitems().success(function(data){
        $scope.items=data;
        });
    		$scope.addItem = function(item) {
			//console.log(item);
			$scope.items.push(item);
  			$http.post('/products', item).success( function(data) {
                           console.log(data);
                        });
			$scope.item = {};
		}
    
		$scope.totalPrice = function(){
			var total = 0;
			for(var i=0;i<$scope.items.length;i++){
				total += $scope.items[i].ItemPrice*$scope.items[i].ItemQuantity;
			}
			return total;
		}
		
		$scope.removeItem = function(item){
             var index = $scope.items.indexOf(item)
            $scope.items.splice(index,1);
  			$http.delete('/products/'+ item.id ).success( function(data) {
           // console.log(data)
           
          
                          
                        });
            
					}

	});
        myApp.factory('getFactory', function($http) {
         return{
            getitems : function() {
                return $http({
                    url: '/products',
                    method: 'GET'
                })
            }
        }
        });

	myApp.controller('HomeController', function($scope) {
			$scope.message = 'This is Home Page screen';
		});
	myApp.controller('AboutController', function($scope) {
			$scope.message = 'This is About Page screen';
		});	
	myApp.controller('CatalogController', function($scope) {
			$scope.message = 'This is Catalog Page screen';
		});	
	myApp.controller('ContactController', function($scope) {
			$scope.message = 'This is Contact Page screen';
		});
    myApp.controller('StoreController', function($scope) {
			$scope.message = 'This is Contact Page screen';
		});
myApp.controller('CheckoutController', function($scope) {
			$scope.message = 'This is Home Page screen';
		});
	myApp.config(['$routeProvider', function($routeProvider) {
	    $routeProvider
	    	.when('/', {
		templateUrl: 'views/Home.html',
		controller: 'HomeController'
	      })
	    	.when('/About', {
		templateUrl: 'views/About.html',
		controller: 'AboutController'
	      })
	    	.when('/Catalog', {
		templateUrl: 'views/Catalog.html',
		controller: 'CatalogController'
	      })
	    	.when('/Contact', {
		templateUrl: 'views/Contact.html',
		controller: 'ContactController'
	      })
        .when('/Store', {
		templateUrl: 'views/store.html',
		controller: 'StoreController'
	      })
         .when('/Checkout', {
		templateUrl: 'views/Catalog.html',
		controller: 'CatalogController'
	      })
	    	.otherwise({
		redirectTo: '/views/Home.html'
	      });
	}]);	


	$scope.editItem=function(item){
		console.log(item);
		var index=$scope.itemsindexOf(item);
	}