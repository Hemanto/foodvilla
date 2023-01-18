import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log("errr", err);

  return <div>Error</div>;
}

export default Error;
