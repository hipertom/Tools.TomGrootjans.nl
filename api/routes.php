<?php
    require('workhours.php');

    $app->get("/workedHours", function() {
        echo Workhours::all()->values()->toJson();
    });

    $app->delete('/workedHours/:id', function ($id) {
        $record = Workhours::where('id', '=', $id)->firstOrFail();
        $record->delete();
    });

    $app->post('/workedHours', function () use ($app) {
        $data = json_decode($app->request()->getBody(), true);
        $record = new Workhours;

        $record->day = $data['day'];
        $record->date = $data['date'];
        $record->month = $data['month'];
        $record->year = $data['year'];
        $record->start = $data['start'];
        $record->end = $data['end'];
        $record->pauze = ($data['pauze'])? 1: 0;

        if ($record->save()){
            echo $record->id;
        }

    });