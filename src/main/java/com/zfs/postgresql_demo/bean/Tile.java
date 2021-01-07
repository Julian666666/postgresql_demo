package com.zfs.postgresql_demo.bean;

import lombok.Data;

import java.io.Serializable;

@Data
public class Tile implements Serializable {
    private byte [] tiles;
}
