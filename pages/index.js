import Head from "next/head";
import Body from "../components/Body";
import styles from "../styles/Home.module.css";

export default function Home({ ...pageProps }) {
  const { grid, setGrid, notes, setNotes } = pageProps;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body grid={grid} setGrid={setGrid} notes={notes} setNotes={setNotes} />
    </div>
  );
}
