package com.zfs.postgresql_demo.service;

import com.zfs.postgresql_demo.bean.Tile;

public interface TileService {

    Tile queryTileByPoints(int x, int y, int zoom);

    Tile queryTileByRoads(int x, int y, int zoom);

    Tile queryTile(String layer, int x, int y, int zoom);

}
