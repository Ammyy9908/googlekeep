import Layout from "../components/Layout";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [grid, setGrid] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const [notes, setNotes] = React.useState([]);
  return (
    <Layout
      grid={grid}
      setGrid={setGrid}
      setDark={setDark}
      dark={dark}
      notes={notes}
      setNotes={setNotes}
    >
      <Component
        {...pageProps}
        grid={grid}
        setDark={setDark}
        dark={dark}
        notes={notes}
        setNotes={setNotes}
      />
    </Layout>
  );
}

export default MyApp;
