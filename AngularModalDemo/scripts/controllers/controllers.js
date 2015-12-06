﻿
    var app = angular.module('modalApp', ['angularModalService']);

    app.controller('YesNoController', ['$scope', 'close', function ($scope, close) {

        $scope.close = function (result) {
            close(result, 500); // close, but give 500ms for bootstrap to animate
        };

    }]);

    app.controller('SampleController', function ($scope, ModalService) {

        $scope.showAModal = function () {

            // Just provide a template url, a controller and call 'showModal'.
            ModalService.showModal({
                templateUrl: "html/templates/yesno.html",
                controller: "YesNoController"
            }).then(function (modal) {
                // The modal object has the element built, if this is a bootstrap modal
                // you can call 'modal' to show it, if it's a custom modal just show or hide
                // it as you need to.
                modal.element.modal();
                modal.close.then(function (result) {
                    $scope.message = result ? "You said Yes" : "You said No";
                });
            });

        };

    });
