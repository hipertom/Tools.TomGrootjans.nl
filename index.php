<!DOCTYPE html>
<html ng-app="toolsApp" lang="en">
  <head>
      <?php require_once('incl/head.html'); ?>
    </head>
    <body ng-controller="myController" ng-cloak>
      <md-content class="md-padding" layout-xs="column" layout="row">
      <div ng-repeat="item in items" flex-xs flex-gt-xs="100" layout="column">
      <md-card class="item">
        <div class="item-head {{item.color}} md-primary md-raised" ng-click="showDialog($event, item)">
            <span>{{item.tag}}</span>
        </div>
        <md-card-title>
          <md-card-title-text>
            <span class="md-headline">{{item.name}}</span>
          </md-card-title-text>
        </md-card-title>
        <md-card-actions layout="row" layout-align="end center">
          <md-button class="md-icon-button" aria-label="Favorite">
            <md-icon md-svg-icon="img/svg/favorite.svg"></md-icon>
          </md-button>
          <md-button class="md-icon-button" aria-label="Settings">
            <md-icon md-svg-icon="img/svg/menu.svg"></md-icon>
          </md-button>
          <md-button class="md-icon-button" aria-label="Share">
            <md-icon md-svg-icon="img/svg/share.svg"></md-icon>
          </md-button>
        </md-card-actions>
      </md-card>
    </div>
  </md-content>



        <!--<div class="row" layout="row">
            <div class="item" ng-repeat="item in items" flex="20">
                <div class="item-head {{item.color}} md-primary md-raised" ng-click="showDialog($event, item)">
                    <span>{{item.tag}}</span>
                </div>
                <div class="item-title">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>-->

    <?php require_once('incl/bodyend.html'); ?>
    </body>
</html>
