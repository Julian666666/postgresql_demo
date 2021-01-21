package com.zfs.postgresql_demo.pojo;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class LzcPolygonExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public LzcPolygonExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andGidIsNull() {
            addCriterion("gid is null");
            return (Criteria) this;
        }

        public Criteria andGidIsNotNull() {
            addCriterion("gid is not null");
            return (Criteria) this;
        }

        public Criteria andGidEqualTo(Integer value) {
            addCriterion("gid =", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidNotEqualTo(Integer value) {
            addCriterion("gid <>", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidGreaterThan(Integer value) {
            addCriterion("gid >", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidGreaterThanOrEqualTo(Integer value) {
            addCriterion("gid >=", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidLessThan(Integer value) {
            addCriterion("gid <", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidLessThanOrEqualTo(Integer value) {
            addCriterion("gid <=", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidIn(List<Integer> values) {
            addCriterion("gid in", values, "gid");
            return (Criteria) this;
        }

        public Criteria andGidNotIn(List<Integer> values) {
            addCriterion("gid not in", values, "gid");
            return (Criteria) this;
        }

        public Criteria andGidBetween(Integer value1, Integer value2) {
            addCriterion("gid between", value1, value2, "gid");
            return (Criteria) this;
        }

        public Criteria andGidNotBetween(Integer value1, Integer value2) {
            addCriterion("gid not between", value1, value2, "gid");
            return (Criteria) this;
        }

        public Criteria andEntityIsNull() {
            addCriterion("entity is null");
            return (Criteria) this;
        }

        public Criteria andEntityIsNotNull() {
            addCriterion("entity is not null");
            return (Criteria) this;
        }

        public Criteria andEntityEqualTo(String value) {
            addCriterion("entity =", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityNotEqualTo(String value) {
            addCriterion("entity <>", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityGreaterThan(String value) {
            addCriterion("entity >", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityGreaterThanOrEqualTo(String value) {
            addCriterion("entity >=", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityLessThan(String value) {
            addCriterion("entity <", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityLessThanOrEqualTo(String value) {
            addCriterion("entity <=", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityLike(String value) {
            addCriterion("entity like", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityNotLike(String value) {
            addCriterion("entity not like", value, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityIn(List<String> values) {
            addCriterion("entity in", values, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityNotIn(List<String> values) {
            addCriterion("entity not in", values, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityBetween(String value1, String value2) {
            addCriterion("entity between", value1, value2, "entity");
            return (Criteria) this;
        }

        public Criteria andEntityNotBetween(String value1, String value2) {
            addCriterion("entity not between", value1, value2, "entity");
            return (Criteria) this;
        }

        public Criteria andLayerIsNull() {
            addCriterion("layer is null");
            return (Criteria) this;
        }

        public Criteria andLayerIsNotNull() {
            addCriterion("layer is not null");
            return (Criteria) this;
        }

        public Criteria andLayerEqualTo(String value) {
            addCriterion("layer =", value, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerNotEqualTo(String value) {
            addCriterion("layer <>", value, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerGreaterThan(String value) {
            addCriterion("layer >", value, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerGreaterThanOrEqualTo(String value) {
            addCriterion("layer >=", value, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerLessThan(String value) {
            addCriterion("layer <", value, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerLessThanOrEqualTo(String value) {
            addCriterion("layer <=", value, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerLike(String value) {
            addCriterion("layer like", value, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerNotLike(String value) {
            addCriterion("layer not like", value, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerIn(List<String> values) {
            addCriterion("layer in", values, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerNotIn(List<String> values) {
            addCriterion("layer not in", values, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerBetween(String value1, String value2) {
            addCriterion("layer between", value1, value2, "layer");
            return (Criteria) this;
        }

        public Criteria andLayerNotBetween(String value1, String value2) {
            addCriterion("layer not between", value1, value2, "layer");
            return (Criteria) this;
        }

        public Criteria andColorIsNull() {
            addCriterion("color is null");
            return (Criteria) this;
        }

        public Criteria andColorIsNotNull() {
            addCriterion("color is not null");
            return (Criteria) this;
        }

        public Criteria andColorEqualTo(Long value) {
            addCriterion("color =", value, "color");
            return (Criteria) this;
        }

        public Criteria andColorNotEqualTo(Long value) {
            addCriterion("color <>", value, "color");
            return (Criteria) this;
        }

        public Criteria andColorGreaterThan(Long value) {
            addCriterion("color >", value, "color");
            return (Criteria) this;
        }

        public Criteria andColorGreaterThanOrEqualTo(Long value) {
            addCriterion("color >=", value, "color");
            return (Criteria) this;
        }

        public Criteria andColorLessThan(Long value) {
            addCriterion("color <", value, "color");
            return (Criteria) this;
        }

        public Criteria andColorLessThanOrEqualTo(Long value) {
            addCriterion("color <=", value, "color");
            return (Criteria) this;
        }

        public Criteria andColorIn(List<Long> values) {
            addCriterion("color in", values, "color");
            return (Criteria) this;
        }

        public Criteria andColorNotIn(List<Long> values) {
            addCriterion("color not in", values, "color");
            return (Criteria) this;
        }

        public Criteria andColorBetween(Long value1, Long value2) {
            addCriterion("color between", value1, value2, "color");
            return (Criteria) this;
        }

        public Criteria andColorNotBetween(Long value1, Long value2) {
            addCriterion("color not between", value1, value2, "color");
            return (Criteria) this;
        }

        public Criteria andLinetypeIsNull() {
            addCriterion("linetype is null");
            return (Criteria) this;
        }

        public Criteria andLinetypeIsNotNull() {
            addCriterion("linetype is not null");
            return (Criteria) this;
        }

        public Criteria andLinetypeEqualTo(String value) {
            addCriterion("linetype =", value, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeNotEqualTo(String value) {
            addCriterion("linetype <>", value, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeGreaterThan(String value) {
            addCriterion("linetype >", value, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeGreaterThanOrEqualTo(String value) {
            addCriterion("linetype >=", value, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeLessThan(String value) {
            addCriterion("linetype <", value, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeLessThanOrEqualTo(String value) {
            addCriterion("linetype <=", value, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeLike(String value) {
            addCriterion("linetype like", value, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeNotLike(String value) {
            addCriterion("linetype not like", value, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeIn(List<String> values) {
            addCriterion("linetype in", values, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeNotIn(List<String> values) {
            addCriterion("linetype not in", values, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeBetween(String value1, String value2) {
            addCriterion("linetype between", value1, value2, "linetype");
            return (Criteria) this;
        }

        public Criteria andLinetypeNotBetween(String value1, String value2) {
            addCriterion("linetype not between", value1, value2, "linetype");
            return (Criteria) this;
        }

        public Criteria andElevationIsNull() {
            addCriterion("elevation is null");
            return (Criteria) this;
        }

        public Criteria andElevationIsNotNull() {
            addCriterion("elevation is not null");
            return (Criteria) this;
        }

        public Criteria andElevationEqualTo(BigDecimal value) {
            addCriterion("elevation =", value, "elevation");
            return (Criteria) this;
        }

        public Criteria andElevationNotEqualTo(BigDecimal value) {
            addCriterion("elevation <>", value, "elevation");
            return (Criteria) this;
        }

        public Criteria andElevationGreaterThan(BigDecimal value) {
            addCriterion("elevation >", value, "elevation");
            return (Criteria) this;
        }

        public Criteria andElevationGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("elevation >=", value, "elevation");
            return (Criteria) this;
        }

        public Criteria andElevationLessThan(BigDecimal value) {
            addCriterion("elevation <", value, "elevation");
            return (Criteria) this;
        }

        public Criteria andElevationLessThanOrEqualTo(BigDecimal value) {
            addCriterion("elevation <=", value, "elevation");
            return (Criteria) this;
        }

        public Criteria andElevationIn(List<BigDecimal> values) {
            addCriterion("elevation in", values, "elevation");
            return (Criteria) this;
        }

        public Criteria andElevationNotIn(List<BigDecimal> values) {
            addCriterion("elevation not in", values, "elevation");
            return (Criteria) this;
        }

        public Criteria andElevationBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("elevation between", value1, value2, "elevation");
            return (Criteria) this;
        }

        public Criteria andElevationNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("elevation not between", value1, value2, "elevation");
            return (Criteria) this;
        }

        public Criteria andLinewtIsNull() {
            addCriterion("linewt is null");
            return (Criteria) this;
        }

        public Criteria andLinewtIsNotNull() {
            addCriterion("linewt is not null");
            return (Criteria) this;
        }

        public Criteria andLinewtEqualTo(Long value) {
            addCriterion("linewt =", value, "linewt");
            return (Criteria) this;
        }

        public Criteria andLinewtNotEqualTo(Long value) {
            addCriterion("linewt <>", value, "linewt");
            return (Criteria) this;
        }

        public Criteria andLinewtGreaterThan(Long value) {
            addCriterion("linewt >", value, "linewt");
            return (Criteria) this;
        }

        public Criteria andLinewtGreaterThanOrEqualTo(Long value) {
            addCriterion("linewt >=", value, "linewt");
            return (Criteria) this;
        }

        public Criteria andLinewtLessThan(Long value) {
            addCriterion("linewt <", value, "linewt");
            return (Criteria) this;
        }

        public Criteria andLinewtLessThanOrEqualTo(Long value) {
            addCriterion("linewt <=", value, "linewt");
            return (Criteria) this;
        }

        public Criteria andLinewtIn(List<Long> values) {
            addCriterion("linewt in", values, "linewt");
            return (Criteria) this;
        }

        public Criteria andLinewtNotIn(List<Long> values) {
            addCriterion("linewt not in", values, "linewt");
            return (Criteria) this;
        }

        public Criteria andLinewtBetween(Long value1, Long value2) {
            addCriterion("linewt between", value1, value2, "linewt");
            return (Criteria) this;
        }

        public Criteria andLinewtNotBetween(Long value1, Long value2) {
            addCriterion("linewt not between", value1, value2, "linewt");
            return (Criteria) this;
        }

        public Criteria andRefnameIsNull() {
            addCriterion("refname is null");
            return (Criteria) this;
        }

        public Criteria andRefnameIsNotNull() {
            addCriterion("refname is not null");
            return (Criteria) this;
        }

        public Criteria andRefnameEqualTo(String value) {
            addCriterion("refname =", value, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameNotEqualTo(String value) {
            addCriterion("refname <>", value, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameGreaterThan(String value) {
            addCriterion("refname >", value, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameGreaterThanOrEqualTo(String value) {
            addCriterion("refname >=", value, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameLessThan(String value) {
            addCriterion("refname <", value, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameLessThanOrEqualTo(String value) {
            addCriterion("refname <=", value, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameLike(String value) {
            addCriterion("refname like", value, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameNotLike(String value) {
            addCriterion("refname not like", value, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameIn(List<String> values) {
            addCriterion("refname in", values, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameNotIn(List<String> values) {
            addCriterion("refname not in", values, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameBetween(String value1, String value2) {
            addCriterion("refname between", value1, value2, "refname");
            return (Criteria) this;
        }

        public Criteria andRefnameNotBetween(String value1, String value2) {
            addCriterion("refname not between", value1, value2, "refname");
            return (Criteria) this;
        }

        public Criteria andGeomIsNull() {
            addCriterion("geom is null");
            return (Criteria) this;
        }

        public Criteria andGeomIsNotNull() {
            addCriterion("geom is not null");
            return (Criteria) this;
        }

        public Criteria andGeomEqualTo(Object value) {
            addCriterion("geom =", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomNotEqualTo(Object value) {
            addCriterion("geom <>", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomGreaterThan(Object value) {
            addCriterion("geom >", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomGreaterThanOrEqualTo(Object value) {
            addCriterion("geom >=", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomLessThan(Object value) {
            addCriterion("geom <", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomLessThanOrEqualTo(Object value) {
            addCriterion("geom <=", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomIn(List<Object> values) {
            addCriterion("geom in", values, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomNotIn(List<Object> values) {
            addCriterion("geom not in", values, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomBetween(Object value1, Object value2) {
            addCriterion("geom between", value1, value2, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomNotBetween(Object value1, Object value2) {
            addCriterion("geom not between", value1, value2, "geom");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdIsNull() {
            addCriterion("property_owner_id is null");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdIsNotNull() {
            addCriterion("property_owner_id is not null");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdEqualTo(Integer value) {
            addCriterion("property_owner_id =", value, "propertyOwnerId");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdNotEqualTo(Integer value) {
            addCriterion("property_owner_id <>", value, "propertyOwnerId");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdGreaterThan(Integer value) {
            addCriterion("property_owner_id >", value, "propertyOwnerId");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("property_owner_id >=", value, "propertyOwnerId");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdLessThan(Integer value) {
            addCriterion("property_owner_id <", value, "propertyOwnerId");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdLessThanOrEqualTo(Integer value) {
            addCriterion("property_owner_id <=", value, "propertyOwnerId");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdIn(List<Integer> values) {
            addCriterion("property_owner_id in", values, "propertyOwnerId");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdNotIn(List<Integer> values) {
            addCriterion("property_owner_id not in", values, "propertyOwnerId");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdBetween(Integer value1, Integer value2) {
            addCriterion("property_owner_id between", value1, value2, "propertyOwnerId");
            return (Criteria) this;
        }

        public Criteria andPropertyOwnerIdNotBetween(Integer value1, Integer value2) {
            addCriterion("property_owner_id not between", value1, value2, "propertyOwnerId");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}