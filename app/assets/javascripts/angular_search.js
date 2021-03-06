var myApp = angular.module('myApp', []);

myApp.controller('sportController', function sportController($scope) {
  $scope.activities = [{sport: 'Aerobatics'},
                      {sport: 'Aggressive inline'},
                      {sport: 'BMX'},
                      {sport: 'BASE jumping'},
                      {sport: 'Cave diving'},
                      {sport: 'Caving'},
                      {sport: 'Extreme ironing'},
                      {sport: 'Freediving'},
                      {sport: 'Freeflying'},
                      {sport: 'Freestyle scootering'},
                      {sport: 'Freeskiing'},
                      {sport: 'Flowriding'},
                      {sport: 'Hang gliding'},
                      {sport: 'Hiking'},
                      {sport: 'Ice climbing'},
                      {sport: 'Ice canoeing'},
                      {sport: 'Kitesurfing'},
                      {sport: 'Kayaking'},
                      {sport: 'Land windsurfing'},
                      {sport: 'Longboarding'},
                      {sport: 'Motocross'},
                      {sport: 'Mountain biking'},
                      {sport: 'Mountaineering'},
                      {sport: 'Mountain boarding'},
                      {sport: 'Open water swimming'},
                      {sport: 'Paragliding'},
                      {sport: 'Rallying'},
                      {sport: 'Rafting'},
                      {sport: 'Rock climbing'},
                      {sport: 'Sandboarding'},
                      {sport: 'Scuba diving'},
                      {sport: 'Skateboarding'},
                      {sport: 'Skiing'},
                      {sport: 'Skydiving'},
                      {sport: 'Skimboarding'},
                      {sport: 'Snowboarding'},
                      {sport: 'Snowmobile'},
                      {sport: 'Snowskating'},
                      {sport: 'Snow skiing'},
                      {sport: 'Street luge'},
                      {sport: 'Surfing'},
                      {sport: 'Wakeboarding'},
                      {sport: 'Waveski'},
                      {sport: 'Whitewater kayaking'},
                      {sport: 'Windsurfing'},
                      {sport: 'Wingsuit flying'},
                      {sport: 'Xpogo'}]
});