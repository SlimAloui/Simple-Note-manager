var app = angular.module('NoteManager', []);

app.controller('NoteManagerController', function($scope){
   $scope.notetext = "";
   $scope.NoteLst = [];

   $scope.SubmitNote = function() {
      $scope.NoteLst.push(
         {
            text : $scope.notetext,
            author : "Current User" ,
            date : Date()
         });
      $scope.notetext = "";
   }
});
