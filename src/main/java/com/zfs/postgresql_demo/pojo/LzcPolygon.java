package com.zfs.postgresql_demo.pojo;

import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
public class LzcPolygon implements Serializable {
    private Integer gid;

    private String entity;

    private String layer;

    private Long color;

    private String linetype;

    private BigDecimal elevation;

    private Long linewt;

    private String refname;

    private Object geom;

    private Integer propertyOwnerId;

    private static final long serialVersionUID = 1L;
}