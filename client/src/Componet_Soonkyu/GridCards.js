import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function GridCars(props) {
  console.log("props값", props);

  return (
    <Grid lg={6} md={8} xs={24}>
      <div style={{ position: "relative" }}>
        <Link to={props.isLogin === false ? "/Login" : "/postreview"} state={{ data: props }}>
          <img style={{ width: "100%", height: "320px" }} src={props.image} alt={props.title} />
        </Link>
      </div>
    </Grid>
  );
}

// <a href={`/postreview/${props.title}`}></a>
