package lab2background;

import java.util.ArrayList;
import java.util.List;

public class PointsBean {
    private List<Point> points;

    PointsBean() {
        points = new ArrayList<>();
    }

    void addPoint(Point point) {
        points.add(point);
    }
    //TODO This method should be used in first rendering on main page
    public List getPoints() {
        return points;
    }
}