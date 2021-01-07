package com.zfs.postgresql_demo.service;

import com.zfs.postgresql_demo.bean.Tile;
import org.springframework.web.bind.annotation.PathVariable;

public interface TileService {

    Tile queryTileByPoints(int x, int y, int zoom);

    Tile queryTileByPolygon(int x, int y, int zoom);

    Tile queryTileByRoads(int x, int y, int zoom);

    Tile queryTile(String layer, int x, int y, int zoom);

    byte[] getTiles(@PathVariable String layer, @PathVariable int x, @PathVariable int y, @PathVariable int z);
}
