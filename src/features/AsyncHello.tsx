import React from "react";
import { useSelector } from "react-redux";

import { selectAsyncHelloLoading } from "./asyncHelloSelectors";
import * as I from "../services/types";

const AsyncHello: React.FC<I.AsyncHello> = ({ greeting }) => {
  const loading = useSelector(selectAsyncHelloLoading);

  return loading === "pending" ? <div>loading...</div> : <div>async {greeting}!!</div>;
};

export default AsyncHello;
