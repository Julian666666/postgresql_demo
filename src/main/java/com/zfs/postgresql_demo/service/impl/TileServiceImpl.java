package com.zfs.postgresql_demo.service.impl;

import com.zfs.postgresql_demo.bean.BoundBox;
import com.zfs.postgresql_demo.bean.Tile;
import com.zfs.postgresql_demo.bean.TileBox;
import com.zfs.postgresql_demo.mapper.TileMapper;
import com.zfs.postgresql_demo.service.TileService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.annotation.Resource;
import java.io.File;
import java.io.IOException;

@Service
public class TileServiceImpl implements TileService {

    /**
     * 保存路径
     */
    private static final String MAP_PATH = "/Users/pan/Documents/map/";
    /**
     * 开启保存数据
     */
    private static final boolean SAVE = true;
    /**
     * 数据库名称
     *
     */
    private static final String DB_TABLE = "road_shape_data";

    @Resource
    private TileMapper tileMapper;

    @Override
    public Tile queryTileByPoints(int x, int y, int zoom) {
        TileBox tileBox = new BoundBox().tile2boundBox(x,y,zoom);
        Tile tile = tileMapper.queryTileByPoints(tileBox);
        return tile;
    }

    @Override
    public Tile queryTileByPolygon(int x, int y, int zoom) {
        TileBox tileBox = new BoundBox().tile2boundBox(x,y,zoom);
        return tileMapper.queryTileByPolygon(tileBox);
    }

    @Override
    public Tile queryTileByRoads(int x, int y, int zoom) {
        TileBox tileBox = new BoundBox().tile2boundBox(x,y,zoom);
        return tileMapper.queryTileByRoads(tileBox.getXmin(),tileBox.getYmin(),tileBox.getXmax(),tileBox.getYmax());
    }

    @Override
    public Tile queryTile(String layer, int x, int y , int zoom) {
        TileBox tileBox = new BoundBox().tile2boundBox(x,y,zoom);
        return tileMapper.queryTile(layer,tileBox.getXmin(),tileBox.getYmin(),tileBox.getXmax(),tileBox.getYmax());
    }
    /**
     * 从 {数据库} 或 {缓存} 中生成二进制数据
     *
     * @param x
     * @param y
     * @param z
     * @return
     * @throws IOException
     */
    @Override
    public byte[] getTiles(@PathVariable String layer, @PathVariable int x, @PathVariable int y, @PathVariable int z) {
        String filePath = layer + "/" + z + "/" + x + "/" + y + ".mvt";
        File file = new File(MAP_PATH + filePath);

        byte[] tiles;
        if (!file.exists()) {
            Tile tile = null;
            //从数据库中查询
            if (layer.equals("points")) {
                tile = queryTileByPoints(x, y, z);
            } else if (layer.equals("roads")) {
                tile = queryTileByRoads(x, y, z);
            } else if (layer.equals("polygon")) {
                tile = queryTileByPolygon(x, y, z);
            }
//            tile = tileService.queryTile(layer, x, y, z);
            tiles = tile.getTiles();
            //文件保存到本地
            if (SAVE) {
//                FileUtils.byteToFile(tiles, MAP_PATH + filePath);
            }
//            System.out.printf("保存数据" + MAP_PATH + filePath + "\n");
        } else {
            //从文件读取
//            FileInputStream fis = new FileInputStream(file);
//            BufferedInputStream bis = new BufferedInputStream(fis);
//            DataInputStream dis = new DataInputStream(fis);


//            int available = dis.available();
//            tiles = new byte[available];
//            dis.readFully(tiles);


//            int len = bis.available();
//            tiles = new byte[len];
//            bis.read(tiles, 0, len);

            tiles = new byte[4096];
//            int length = 0 ; //代表实际读取的字节数
//            while( (length = bis.read(tiles) )!= -1 ){
//                //length 代表实际读取的字节数
//                bis.read(tiles, 0, length );
//            }

//            dis.close();
//            //关资源
//            bis.close();
//            fis.close();
//            System.out.printf("使用缓存" + MAP_PATH + filePath + "\n");
        }
        return tiles;
    }

}
