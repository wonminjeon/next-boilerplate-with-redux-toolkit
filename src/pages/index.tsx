import Link from "next/link";

import AsyncHello from "../features/AsyncHello";
import { fetchHelloThunk } from "../features/asyncHelloSlice";
import * as I from "../services/types";
import Test from "../components/test";

const add = (x: number, y: number): number => {
  return x + y;
};

const Index = ({ payload }: { payload: I.AsyncHello }) => {
  const { greeting } = payload;

  return (
    <div>
      <AsyncHello greeting={greeting} />
      <Link href="/test">
        <a className="underline text-purple-800">go to test</a>
      </Link>
      <p>
        <span className="text-white">Hello Next.js</span> <Test version={add(4, 5)} />
      </p>
    </div>
  );
};

Index.getInitialProps = async ({ store }) => {
  const greeting = await store.dispatch(fetchHelloThunk());
  return greeting;
};

export default Index;
