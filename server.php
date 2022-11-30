<?php
$string = file_get_contents('todo.json');
$todos = json_decode($string, true);

if (isset($_POST["newToDo"])) {
    $new_todo = $_POST["newToDo"];
    $newTodo = [
        "text" => $new_todo,
        "done" => false
    ];
    $todos[] = $newTodo;
    file_put_contents("todo.json", json_encode($todos));
}

// Invio dati
header("Content-Type: application/json");
echo json_encode($todos);
