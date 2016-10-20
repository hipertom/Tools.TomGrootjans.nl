<!DOCTYPE html>
<html ng-app="toolsApp" lang="en">
  <head>
      <?php require_once('incl/head.html'); ?>
    </head>
    <body ng-controller="myController" id="popupContainer" ng-cloak>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1 item dialog-demo-content" ng-repeat="item in items" >
                    <div class="item-head {{item.color}} md-primary md-raised" ng-click="showAdvanced($event)">
                        <span>{{item.tag}}</span>
                    </div>
                    <div class="item-title">
                        <span class="lead">{{item.name}}</span>
                    </div>
                </div>

            </div>
        </div>

    <?php require_once('incl/bodyend.html'); ?>
    </body>
</html>
