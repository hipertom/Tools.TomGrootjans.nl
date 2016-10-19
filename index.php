<!DOCTYPE html>
<html ng-app="toolsApp" lang="en">
  <head>
      <?php require_once('incl/head.html'); ?>
    </head>
    <body ng-controller="Ctrl">
        <div class="container-fluid" >
            <div class="row">
                <div class="col-md-1 tool-block" ng-repeat="item in items">
                    {{item.name}}
                </div>
            </div>
        </div>


        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script>
    </body>
</html>
