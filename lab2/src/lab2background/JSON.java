package lab2background;

import com.google.gson.Gson;

class JSON {
    private static Gson gson = new Gson();
    static String toJSON(Object object){
        return gson.toJson(object);
    }
}