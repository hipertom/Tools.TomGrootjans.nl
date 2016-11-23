<?php

use Illuminate\Database\Eloquent\Model as Eloquent;

class Workhours extends Eloquent {
    public $timestamps = false;
    protected $table = 'worked_hours';
    public static $db;
}
