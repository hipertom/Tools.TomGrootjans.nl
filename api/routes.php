<?php
    require('workhours.php');

    $app->get("/workedHours", function() {
        $result = Workhours::all()->values()->toJson();
        $result = str_replace('"pauze":1','"pauze":true',$result);
        $result = str_replace('"pauze":0','"pauze":false',$result);
        echo $result;
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
        $record->pauze = ($data['pauze'] === 'true' || $data['pauze'] === true)? 1: 0;

        if ($record->save()){
            echo $record->id;
        }

    });