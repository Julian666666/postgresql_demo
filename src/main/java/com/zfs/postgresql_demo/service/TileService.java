package com.zfs.postgresql_demo.service;

import com.zfs.postgresql_demo.bean.Tile;
import com.zfs.postgresql_demo.pojo.LzcPolygon;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface TileService {

    Tile queryTileByPoints(int x, int y, int zoom);

    Tile queryTileByPolygon(int x, int y, int zoom);

    Tile queryTileByRoads(int x, int y, int zoom);

    Tile queryTile(String layer, int x, int y, int zoom);

    byte[] getTiles(@PathVariable String layer, @PathVariable int x, @PathVariable int y, @PathVariable int z);

    List<LzcPolygon> listLzcPolygon(double lat, double lon, int zoom);
}
