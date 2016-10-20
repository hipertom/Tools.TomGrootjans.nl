<!DOCTYPE html>
<html ng-app="toolsApp" lang="en">
  <head>
      <?php require_once('incl/head.html'); ?>
    </head>
    <body ng-controller="myController">
        <div class="container-fluid" >
            <div class="row">
                <div class="col-md-1 item" ng-repeat="item in items">
                    <div class="item-head {{item.color}}">
                        <span>{{item.tag}}</span>
                    </div>
                    <div class="item-title">
                        <span class="lead">{{item.name}}</span>
                    </div>
                </div>

            </div>
        </div>


        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/MyOnLoad.js"></script>
    </body>
</html>
