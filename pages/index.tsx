import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import React from "react";
import Terminal from "../common/components/terminal";

const UseDirectory = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(`/api/directory`, fetcher);

  return <>{JSON.stringify(data)}</>;
};

const Home: NextPage = () => {
  const [shouldRender, setShouldRender] = React.useState(false);

  return (
    <div>
      <Head>
        <title>David Kim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Terminal />
        <div>
          <button
            onClick={() => {
              setShouldRender(true);
            }}
          >
            {"Get Directory"}
          </button>
          {shouldRender && <UseDirectory />}
        </div>
      </main>

      <footer>
        {/*  <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
};

export default Home;
