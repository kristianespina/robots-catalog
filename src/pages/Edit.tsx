import React from "react";
import { useParams } from "react-router-dom";
import Create from "./Create";

const Edit = () => {
  const { id } = useParams();
  return <Create robotId={id} />;
};

export default Edit;
