

var node_server="http://localhost:3000";
var app = angular.module('angular',[]);

	app.controller('angular_controller',function($scope, $http , $rootScope){
//Pinpointing your I.P.
$scope.loaded=true;
			  $.ajax({
			        type: 'GET',
			        url: node_server+'/ip',
			        dataType: 'json',
			        success: function(data) {
			            console.log(data);
                  $scope.ip=data.ip;
                  $scope.ip_data=data;
                  if($scope.ip_data!=null)
		          	 {
                   $scope.ip_data_keys=Object.keys($scope.ip_data);
                   var q=$scope.ip_data["city"]+","+$scope.ip_data["country"];
                   get_weather(q);
                 }

			            $scope.$apply();
			        },
			        error: function(jqXHR, textStatus, errorThrown){
                  alert('Cannot Find Your Ip');
			        }
			    });

//Getting Weather From GeoLocation.
  function get_weather(q){
          			  $.ajax({
          			        type: 'GET',
          			        url: node_server+'/weather?q='+q,
          			        dataType: 'json',
          			        success: function(data) {
          			            console.log(data);
                            $scope.data=data;
                            $scope.loaded=false;
          			            $scope.$apply();

          			        },
          			        error: function(jqXHR, textStatus, errorThrown){
                            alert('Cannot Find The Weather of your location');
          			        }
          			    });
}



		});

