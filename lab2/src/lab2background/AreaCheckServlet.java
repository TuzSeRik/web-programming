package lab2background;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class AreaCheckServlet extends HttpServlet{
    private PointsBean pointsBean = new PointsBean();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        int t = Integer.parseInt(req.getParameter("t"));
        String q1 = req.getParameter("q1");
        String q2 = req.getParameter("q2");
        String q3 = req.getParameter("q3");
        String q4 = req.getParameter("q4");

        try {
            double x = Double.parseDouble(req.getParameter("x"));
            double y = Double.parseDouble(req.getParameter("y"));
            double r = Double.parseDouble(req.getParameter("r"));
            double xL = Double.parseDouble(req.getParameter("xL"));
            double xR = Double.parseDouble(req.getParameter("xR"));
            double yL = Double.parseDouble(req.getParameter("yL"));
            double yR = Double.parseDouble(req.getParameter("yR"));
            double rL = Double.parseDouble(req.getParameter("rL"));
            double rR = Double.parseDouble(req.getParameter("rR"));

            if ((x > xR || x < xL) || (y > yR || y < yL) || (r > rR || r < rL ) || (t != 1)){
                wrongParameters(res);
            } else {
                Point point = new Point(q1, q2, q3, q4, x, y, r);
                pointsBean.addPoint(point);
                res.setContentType("text/json; charset=UTF-8");
                PrintWriter out = res.getWriter();
                out.println(JSON.toJSON(point));
            }
        } catch (Exception e){
            wrongParameters(res);
        }
    }

    private void wrongParameters(HttpServletResponse res) throws IOException {
        res.setContentType("text/json; charset=UTF-8");
        PrintWriter out = res.getWriter();
        out.println("{\"t\": \'error\' \"}");
    }
}