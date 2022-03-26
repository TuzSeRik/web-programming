<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8">
  <title>Веб-программирование - Лабораторная №2 - Главная страница</title>
  <link rel="stylesheet" href="css/Index.css">
  <script src="js/MainScript.js"></script>
  <script src="js/GraphicScript.js"></script>
  <script src="js/ValidationScript.js"></script>
  <script src="js/TransportScript.js"></script>
</head>
<body>
<div class="container">
  <div class="content">
    <header>
      <div class="header-text"><h2>Солодовников Дмитрий Сергеевич</h2></div>
      <div class="header-text"><h2>Группа: P3214</h2></div>
      <div class="header-text"><h2>Вариант: 216000</h2></div>
    </header>

    <div class="plane-n-info">
      <div class="plane">
        <h2 class="plane-header">Плоскость</h2>
        <div class="quadrants">
          <canvas class="plane-quadrant" id="alpha" width="200" height="200"></canvas>
          <canvas class="plane-quadrant" id="beta" width="200" height="200"></canvas>
          <canvas class="plane-quadrant" id="gamma" width="200" height="200"></canvas>
          <canvas class="plane-quadrant" id="delta" width="200" height="200"></canvas>
          <canvas class="plane-axis" id="axes" width="400" height="400"></canvas>
        </div>
      </div>

      <div class="info-panel">
        <div class="arguments">
          <div class="shape">

            <label class="selection">
              1 четв.:
              <select data-symbol="alpha" id="quadrant-one">
                <option value="1">Треугольник (мал.)</option>
                <option value="2">Треугольник (бол.)</option>
                <option value="4">Треугольник (лев.)</option>
                <option value="3">Треугольник (вер.)</option>
                <option value="6">Прямоугольник (лев.)</option>
                <option value="5" selected>Прямоугольник (вер.)</option>
                <option value="7">Квадрат (мал.)</option>
                <option value="8">Квадрат (бол.)</option>
                <option value="9">Сектор (мал.)</option>
                <option value="a">Сектор (бол.)</option>
                <option value="b">Без области</option>
              </select>
            </label>

            <label class="selection">
              3 четв.:
              <select data-symbol="gamma" id="quadrant-two">
                <option value="1">Треугольник (мал.)</option>
                <option value="2">Треугольник (бол.)</option>
                <option value="3">Треугольник (лев.)</option>
                <option value="4">Треугольник (низ.)</option>
                <option value="5">Прямоугольник (лев.)</option>
                <option value="6">Прямоугольник (низ.)</option>
                <option value="7">Квадрат (мал.)</option>
                <option value="8">Квадрат (бол.)</option>
                <option value="9">Сектор (мал.)</option>
                <option value="a">Сектор (бол.)</option>
                <option value="b" selected>Без области</option>
              </select>
            </label>

            <label class="selection">
              2 четв.:
              <select data-symbol="beta" id="quadrant-three">
                <option value="1">Треугольник (мал.)</option>
                <option value="2" selected>Треугольник (бол.)</option>
                <option value="4">Треугольник (вер.)</option>
                <option value="3">Треугольник (пра.)</option>
                <option value="6">Прямоугольник (вер.)</option>
                <option value="5">Прямоугольник (пра.)</option>
                <option value="7">Квадрат (мал.)</option>
                <option value="8">Квадрат (бол.)</option>
                <option value="9">Сектор (мал.)</option>
                <option value="a">Сектор (бол.)</option>
                <option value="b">Без области</option>
              </select>
            </label>

            <label class="selection">
              4 четв.:
              <select data-symbol="delta" id="quadrant-four">
                <option value="1">Треугольник (мал.)</option>
                <option value="2">Треугольник (бол.)</option>
                <option value="3">Треугольник (низ.)</option>
                <option value="4">Треугольник (пра.)</option>
                <option value="5">Прямоугольник (низ.)</option>
                <option value="6">Прямоугольник (пра.)</option>
                <option value="7">Квадрат (мал.)</option>
                <option value="8">Квадрат (бол.)</option>
                <option value="9">Сектор (мал.)</option>
                <option value="a" selected>Сектор (бол.)</option>
                <option value="b">Без области</option>
              </select>
            </label>
          </div>

          <div class="numbers">
            <div class="value">
              <h3>X</h3>
              <label><input id="x-visible" class="input" type="text" name="x-visible" value="0" required></label>
              <div class="restriction-group">
                <label><input id="x-left" class="left-border" type="text" value="-5" maxlength="2"></label>
                <span>—</span>
                <label><input id="x-right" class="right-border" type="text" value="3" maxlength="2"></label>
                <label><input id="x-radio" class="radio" type="checkbox"></label>
                <span>-</span>
                <label><input class="visual-example" type="radio" checked></label>
              </div>
              <p class="warn" id="x-warn">Заглушка</p>
            </div>

            <div class="value">
              <h3>Y</h3>
              <label><input id="y-visible" class="input" type="number" name="x-visible" value="0" step="0.5" required></label>
              <div class="restriction-group">
                <label><input id="y-left" class="left-border" type="text" value="-5" maxlength="2"></label>
                <span>—</span>
                <label><input id="y-right" class="right-border" type="text" value="3" maxlength="2"></label>
                <label><input id="y-radio" class="radio" type="checkbox" checked></label>
                <span>-</span>
                <label><input class="visual-example" type="radio" checked></label>
              </div>
              <p class="warn" id="y-warn">Заглушка</p>
            </div>

            <div class="value">
              <h3>R</h3>
              <label><input id="r-visible" class="input" type="text" name="x-visible" value="2" required></label>
              <div class="restriction-group">
                <label><input id="r-left" class="left-border" type="text" value="2"></label>
                <span>—</span>
                <label><input id="r-right" class="right-border" type="text" value="5" maxlength="2"></label>
                <label><input id="r-radio" class="radio" type="checkbox" maxlength="2"></label>
                <span>-</span>
                <label><input class="visual-example" type="radio" checked></label>
              </div>
              <p class="warn" id="r-warn">Заглушка</p>
            </div>
          </div>
        </div>

        <div class="result">
          <div class="table-place">
            <!--TODO There should be located first render of point's table on load-->
          </div>
        </div>
      </div>
    </div>

    <form id="hidden-form">
      <input id="x-inside" type="hidden" name="x-inside">
      <input id="y-inside" type="hidden" name="y-inside">
      <input id="r-inside" type="hidden" name="r-inside">
      <input class="submit-button" id="submit" type="button" value="Проверить координаты">
    </form>
  </div>
</div>
</body>
</html>