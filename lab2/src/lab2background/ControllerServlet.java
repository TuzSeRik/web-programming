package lab2background;

import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        if (req.getParameter("t") == null){
            req.getRequestDispatcher("/Index.jsp").forward(req, res);
        }
        else if(req.getParameter("t").equals("1")) {
            RequestDispatcher requestDispatcher = req.getRequestDispatcher("/model");
            requestDispatcher.forward(req, res);
        }
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("/Index.jsp");
        requestDispatcher.forward(req, resp);
    }
}