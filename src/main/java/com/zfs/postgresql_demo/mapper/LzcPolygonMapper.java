package com.zfs.postgresql_demo.mapper;

import com.zfs.postgresql_demo.pojo.LzcPolygon;
import com.zfs.postgresql_demo.pojo.LzcPolygonExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface LzcPolygonMapper {
    long countByExample(LzcPolygonExample example);

    int deleteByExample(LzcPolygonExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(LzcPolygon record);

    int insertSelective(LzcPolygon record);

    List<LzcPolygon> selectByExample(LzcPolygonExample example);

    LzcPolygon selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") LzcPolygon record, @Param("example") LzcPolygonExample example);

    int updateByExample(@Param("record") LzcPolygon record, @Param("example") LzcPolygonExample example);

    int updateByPrimaryKeySelective(LzcPolygon record);

    int updateByPrimaryKey(LzcPolygon record);
}