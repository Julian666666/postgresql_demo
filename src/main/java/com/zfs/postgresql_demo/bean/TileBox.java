package com.zfs.postgresql_demo.bean;

import lombok.Data;

import java.io.Serializable;

@Data
public class TileBox implements Serializable {
    private double xmin;
    private double xmax;
    private double ymin;
    private double ymax;
}
