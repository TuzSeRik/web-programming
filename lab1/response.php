<?php
    $time = microtime(true);
    date_default_timezone_set($_GET["timezone"]);
    $x = $_GET["x-selector"];
    $y = $_GET["y-selector"];
    $r = $_GET["r-selector"];
    $return = false;

    function area($x1, $y1, $x2, $y2, $x3, $y3){ 
        return abs(($x1 * ($y2 - $y3) + $x2 * ($y3 - $y1) + $x3 * ($y1 - $y2)) / 2.0); 
    } 

    if(($x >= -3 && $x <= 5) && ($y >=-5 && $y <= 3) && ($r >= 1 && $r <= 5)){
        if (($y >= 0) && ($x < 0)){
            if ($r >= sqrt($x*$x + $y*$y)){
                $return = true;
            }
        }

        if (($y >= 0) && ($x >= 0)){
            $A = area (0, 0, 0, $r, $r, 0); 
            $A1 = area ($x, $y, 0, $r, $r, 0); 
            $A2 = area ($x, $y, 0, 0, $r, 0); 
            $A3 = area ($x, $y, 0, 0, 0, $r);
            $return = ($A == $A1 + $A2 + $A3);
        }

        if (($y < 0) && ($x >= 0)){
            if ((($x >= 0) && ($x <= $r)) && (($y <= 0) && ($y >= -$r))){
                $return = true;
            }
        }


        if ($return == true){
            echo '
                <!DOCTYPE html>
    
               <html>
                    <head>
                        <meta charset="UTF-8">
                        <title>Веб-программирование - Лабораторная №1 - Страница ответа</title>
                        <link rel="stylesheet" href="response.css">
                    </head>
        
                    <body>
                        <table id="main" width="90%" cellpadding="0" cellspacing="0">
                            <tr id="header">
                                <th colspan="5"><h1><b>Солодовников Дмитрий Сергеевич - P3214 - №214016</b></h1></th>
                            </tr>
                            <tr>
                                <th colspan="5"><h2><b>Ура! Точка принадлежит графику! ;)</b></h2></th>
                            </tr>
                            <tr>
                                <th colspan="3"><h3><b>Переданные значения</b></h3></th><th colspan="2"><h3><b>Время</b></h3></th>
                            </tr>
                            <tr>
                                <th><h4><b>X</b></h4></th>
                                <th><h4><b>Y</b></h4></th>
                                <th><h4><b>R</b></h4></th>
                                <th><h4><b>Системное</b></h4></th>
                                <th><h4><b>Выполнения скрипта</b></h4></th>
                            </tr>
                            <tr>
                                <td>'.$x.'</td>
                                <td>'.$y.'</td>
                                <td>'.$r.'</td>
                                <td>'.date("c").'</td>
                                <td>'.round(microtime(true) - $time, 6).' секунд</td>
                            </tr>
                            <tr>
                                <th><h4><b><a href="index.html">На главную страницу</a></b></h4></th>
                            </tr>
                        </table>
                    </body>
                </html>'
            ;    
        }
        else{
            echo '
                <!DOCTYPE html>
            
                <html>
                    <head>
                        <meta charset="UTF-8">
                        <title>Веб-программирование - Лабораторная №1 - Страница ответа</title>
                        <link rel="stylesheet" href="response.css">
                    </head>

                    <body>
                        <table id="main" width="90%" cellpadding="0" cellspacing="0">
                            <tr id="header">
                                <th colspan="5"><h1><b>Солодовников Дмитрий Сергеевич - P3214 - №214016</b></h1></th>
                            </tr>
                            <tr>
                                <th colspan="5"><h2><b>Увы! Точка не принадлежит графику! :(</b></h2></th>
                            </tr>
                            <tr>
                                <th colspan="3"><h3><b>Переданные значения</b></h3></th><th colspan="2"><h3><b>Время</b></h3></th>
                            </tr>
                            <tr>
                                <th><h4><b>X</b></h4></th>
                                <th><h4><b>Y</b></h4></th>
                                <th><h4><b>R</b></h4></th>
                                <th><h4><b>Системное</b></h4></th>
                                <th><h4><b>Выполнения скрипта</b></h4></th>
                            </tr>
                            <tr>
                                <td>'.$x.'</td>
                                <td>'.$y.'</td>
                                <td>'.$r.'</td>
                                <td>'.date("c").'</td>
                                <td>'.round(microtime(true) - $time, 6).' секунд</td>
                            </tr>
                            <tr>
                                <th><h4><b><a href="index.html">На главную страницу</a></b></h4></th>
                            </tr>
                        </table>
                    </body>
                </html>'
            ;
        }
    }
    else echo "Вам что серьезно так сложно вводить данные через форму??? У вас сервер после этого упадет??? Наступит конец света??? Нет, <s>ПИП</s> Веб, нет! Тогда быстрее на <a href='index.html'>на главную страницу!!!</a> Вводить данные через форму!!!";
?>