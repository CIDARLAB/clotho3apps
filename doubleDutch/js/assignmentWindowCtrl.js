app.controller('assignmentWindowCtrl', function ($scope, $modalInstance, items) {

  $scope.initialTemp = items.initialTemp;
  $scope.numAnnealings = items.numAnnealings;
  $scope.toleranceModifier = items.toleranceModifier;

  $scope.weights = {levelMatch: items.weights.levelMatch, homology: items.weights.homology, reuse: items.weights.reuse};

  $scope.numClusterings = items.numClusterings;
  $scope.chooseTargets = items.chooseTargets;
  $scope.clustModes = items.clustModes;
  
  $scope.ok = function () {
    $modalInstance.close({initialTemp: $scope.initialTemp, numAnnealings: $scope.numAnnealings, toleranceModifier: $scope.toleranceModifier, 
        weights: $scope.weights, numClusterings: $scope.numClusterings, chooseTargets: $scope.chooseTargets});
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

});