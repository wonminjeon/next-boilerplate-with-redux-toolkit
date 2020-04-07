import Link from "next/link";

import AsyncHello from "../features/AsyncHello";
import { fetchHelloThunk } from "../features/asyncHelloSlice";
import * as I from "../services/types";

const Index = ({ payload }: { payload: I.AsyncHello }) => {
  const { greeting } = payload;

  return (
    <div>
      <AsyncHello greeting={greeting} />
      <Link href="/test">
        <a>go to test</a>
      </Link>
    </div>
  );
};

Index.getInitialProps = async ({ store }) => {
  const greeting = await store.dispatch(fetchHelloThunk());
  return greeting;
};

export default Index;
