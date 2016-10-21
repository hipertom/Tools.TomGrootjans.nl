<!DOCTYPE html>
<html ng-app="toolsApp" lang="en">
  <head>
      <?php require_once('incl/head.html'); ?>
    </head>
    <body ng-controller="myController" ng-cloak>
        <div class="row" layout="row">
            <div class="item" ng-repeat="item in items" flex="20">
                <div class="item-head {{item.color}} md-primary md-raised" ng-click="showDialog($event, item.filename)">
                    <span>{{item.tag}}</span>
                </div>
                <div class="item-title">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>

    <?php require_once('incl/bodyend.html'); ?>
    </body>
</html>
