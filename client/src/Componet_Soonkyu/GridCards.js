import React from "react";
import { Col } from "antd";
import "antd/dist/antd.min.css";
import { Link } from "react-router-dom";

export default function GridCars(props) {
  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <Link to="/Reviewlist" state={{ data: props }}>
          <img style={{ width: "100%", height: "320px" }} src={props.image} alt={props.title} />
        </Link>
      </div>
    </Col>
  );
}

// <a href={`/postreview/${props.title}`}></a>
