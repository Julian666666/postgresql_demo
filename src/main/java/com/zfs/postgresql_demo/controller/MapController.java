package com.zfs.postgresql_demo.controller;

import com.zfs.postgresql_demo.pojo.LzcPolygon;
import com.zfs.postgresql_demo.service.TileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

@Controller
public class MapController {

    @Autowired
    private TileService tileService;

//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String map() {
//        return "map";
//    }


    @RequestMapping(value = "/tiles/{layer}/{z}/{x}/{y}", method = RequestMethod.GET, produces = "application/x-protobuf")
    public void vectorTile(HttpServletResponse response, @PathVariable String layer, @PathVariable int x, @PathVariable int y, @PathVariable int z) throws IOException {
        //添加请求头
        response.addHeader("Content-Type", "application/x-protobuf");
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

        byte[] tiles = tileService.getTiles(layer, x, y, z);

        //输出到屏幕
        OutputStream os = response.getOutputStream();
        os.write(tiles);
        os.flush();
        os.close();

    }

    @ResponseBody
    @RequestMapping(value = "/getTiles/{layer}/{z}/{x}/{y}", produces = "application/x-protobuf")
    public byte[] getVectorTile(HttpServletResponse response, @PathVariable String layer, @PathVariable int x, @PathVariable int y, @PathVariable int z) {
        //添加请求头
        response.addHeader("Content-Type", "application/x-protobuf");

        byte[] tiles = tileService.getTiles(layer, x, y, z);
        return tiles;
    }

    @ResponseBody
    @RequestMapping(value = "/listLzcPolygon")
    public List<LzcPolygon> listLzcPolygon(double lat, double lon, int zoom) {
        return tileService.listLzcPolygon(lat, lon, zoom);
    }

    @ResponseBody
    @RequestMapping("/print")
    public void print(double lat, double lon, int zoom) {

    }
}
