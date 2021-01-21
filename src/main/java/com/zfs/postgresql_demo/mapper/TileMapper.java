package com.zfs.postgresql_demo.mapper;

import com.zfs.postgresql_demo.bean.Tile;
import com.zfs.postgresql_demo.bean.TileBox;
import com.zfs.postgresql_demo.pojo.LzcPolygon;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TileMapper {
//    @Select("SELECT\n" +
//            "\tST_AsMVT ( tile, 'points' ) points \n" +
//            "FROM\n" +
//            "\t(\n" +
//            "SELECT\n" +
//            "\tst_asmvtgeom ( T.geom, st_makeenvelope (#{xmin,jdbcType=NUMERIC}, #{ymin,jdbcType=NUMERIC}, #{xmax,jdbcType=NUMERIC},#{ymax,jdbcType=NUMERIC}, 4326 ), 4096, 0, TRUE ) AS geom \n" +
//            "FROM\n" +
//            "\tlzc_point T \n" +
//            "\t) AS tile \n" +
//            "WHERE\n" +
//            "\ttile.geom IS NOT NULL;")
//    @Results(value = {
//            @Result(property = "tiles",column = "points",jdbcType = JdbcType.BINARY)
//    })
    Tile queryTileByPoints(TileBox tileBox);

//    @Select("SELECT\n" +
//            "\tST_AsMVT ( tile, 'polygon' ) polygon \n" +
//            "FROM\n" +
//            "\t(\n" +
//            "SELECT\n" +
//            "\tst_asmvtgeom ( T.geom, st_makeenvelope (#{xmin,jdbcType=NUMERIC}, #{ymin,jdbcType=NUMERIC}, #{xmax,jdbcType=NUMERIC},#{ymax,jdbcType=NUMERIC}, 4326 ), 4096, 0, TRUE ) AS geom \n" +
//            "FROM\n" +
//            "\tlzc_polygon T \n" +
//            "\t) AS tile \n" +
//            "WHERE\n" +
//            "\ttile.geom IS NOT NULL;")
//    @Results(value = {
//            @Result(property = "tiles",column = "polygon",jdbcType = JdbcType.BINARY)
//    })
    Tile queryTileByPolygon(TileBox tileBox);

    List<LzcPolygon> listLzcPolygon(TileBox tileBox);

//    @Select("SELECT\n" +
//            "\tST_AsMVT ( tile, 'roads' ) roads \n" +
//            "FROM\n" +
//            "\t(\n" +
//            "SELECT\n" +
//            "\tst_asmvtgeom ( T.geom, st_makeenvelope (#{xmin,jdbcType=NUMERIC}, #{ymin,jdbcType=NUMERIC}, #{xmax,jdbcType=NUMERIC},#{ymax,jdbcType=NUMERIC}, 4326 ), 4096, 0, TRUE ) AS geom \n" +
//            "FROM\n" +
//            "\tgis_osm_roads_free_1 T \n" +
//            "\t) AS tile \n" +
//            "WHERE\n" +
//            "\ttile.geom IS NOT NULL;")
//    @Results(value = {
//            @Result(property = "tiles",column = "roads",jdbcType = JdbcType.BINARY)
//    })
    Tile queryTileByRoads(double xmin, double ymin, double xmax, double ymax);

//    @Select("SELECT\n" +
//            "\tST_AsMVT ( tile, '#{layer,jdbcType=String}' ) #{layer,jdbcType=String} \n" +
//            "FROM\n" +
//            "\t(\n" +
//            "SELECT\n" +
//            "\tst_asmvtgeom ( T.geom_data, st_makeenvelope (#{xmin,jdbcType=NUMERIC}, #{ymin,jdbcType=NUMERIC}, #{xmax,jdbcType=NUMERIC},#{ymax,jdbcType=NUMERIC}, 4326 ), 4096, 0, TRUE ) AS geom \n" +
//            "FROM\n" +
//            "\t#{dbTable,jdbcType=String} T \n" +
//            "\t) AS tile \n" +
//            "WHERE\n" +
//            "\ttile.geom IS NOT NULL;")
//    @Results(value = {
//            @Result(property = "tiles",column = "#{layer,jdbcType=String}",jdbcType = JdbcType.BINARY)
//    })
    Tile queryTile(String layer, double xmin, double ymin, double xmax, double ymax);
}
