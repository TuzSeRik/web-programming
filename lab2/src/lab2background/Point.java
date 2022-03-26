package lab2background;

import static java.lang.StrictMath.pow;
import static java.lang.StrictMath.sqrt;

class Point {

    private boolean isHit = false;
    private double x;
    private double y;
    private double r;

    Point(String q1, String q2, String q3, String q4, double x, double y, double r) {
        quadrantSelector(q1, q2, q3, q4, x, y, r);
    }

    private void quadrantSelector(String q1, String q2, String q3, String q4, double x, double y, double r) {
        if (x < 0 && y >= 0) {
            resultSelector(q1, -x, y, r);
        }
        if (x >= 0 && y >= 0) {
            resultSelector(q3, x, y, r);
        }
        if (x < 0 && y < 0) {
            resultSelector(q2, -x, -y, r);
        }
        if (x >= 0 && y < 0) {
            resultSelector(q4, x, -y, r);
        }

        this.x = x;
        this.y = y;
        this.r = r;
    }

    private void resultSelector(String q, double x, double y, double r) {
        isHit = false;

        switch (q) {
            case "1":
                if (x <= r / 2 && y <= r / 2 && (x + y) <= r / 2) isHit = true;
                return;
            case "2":
                if (x <= r && y <= r && (x + y) <= r) isHit = true;
                return;
            case "3":
                if (x <= r / 2 && y <= 2 && x + r <= r / 1.5) isHit = true; //Заменить формулу!
                return;
            case "4":
                if (x <= r && y <= r / 2 && x + r <= r / 1.5) isHit = true; //Заменить формулу!
                return;
            case "5":
                if (x <= r / 2 && y <= r) isHit = true;
                return;
            case "6":
                if (x <= r && y <= r / 2) isHit = true;
                return;
            case "7":
                if (x <= r / 2 && y <= r / 2) isHit = true;
                return;
            case "8":
                if (x <= r && y <= r) isHit = true;
                return;
            case "9":
                if (x <= r / 2 && y <= r / 2 && sqrt(pow(x, 2) + pow(y, 2)) <= r / 2) isHit = true;
                return;
            case "a":
                if (x <= r && y <= r && sqrt(x * x + y * y) <= r) isHit = true;
                return;
            case "b":
        }
    }
    //TODO These methods should be used in first rendering on main page
    double getX() {
        return x;
    }

    double getY() {
        return y;
    }

    double getR() {
        return r;
    }

    boolean isHit(double r, String q1, String q2, String q3, String q4) {
        quadrantSelector(q1, q2, q3, q4, x, y, r);
        return isHit;
    }
}