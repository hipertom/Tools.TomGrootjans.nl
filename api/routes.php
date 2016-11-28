<?php
    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    
    require('workhours.php');
    
    $app->get("/hours", function(Request $request, Response $response) {
        $result = Workhours::all()->values()->toJson();
        $result = str_replace('"pauze":1','"pauze":true',$result);
        $result = str_replace('"pauze":0','"pauze":false',$result);

        $response->getBody()->write($result);

        return $response;
    });

    /**
    * @param request {ServerRequestInterface} - The HTTP request object.
    * @param response {ResponseInterface} - The to be created HTTP response object.
    * @return {boolean} - True(1) if succeeded, False(0) if not succeeded.
    */
    $app->delete('/hours/delete/{id}', function ($request, $response, $args) {
        $id = (int)$args['id'];
        $record = Workhours::where('id', '=', $id);

        if($record) {
             return $response->getBody()->write($record->delete());
        }
        return $response->getBody()->write(0);
    });

    $app->post('/hours/new', function ($request, $response) {
        $data = $request->getParsedBody();
        $record = new Workhours;

        // to do: Test if all data is in there

        try {
            $record->day = $data['day'];
            $record->date = $data['date'];
            $record->month = $data['month'];
            $record->year = $data['year'];
            $record->start = $data['start'];
            $record->end = $data['end'];
            $record->pauze = ($data['pauze'] === 'true' || $data['pauze'] === true) ? 1 : 0;
        } catch (QueryException $e) {
            return $response->getBody()->write(0);
        }

        if ($record->save()){
           return $response->getBody()->write($record->id);
        }
        return $response->getBody()->write(0);
    });