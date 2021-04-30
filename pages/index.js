import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "@farbenmeer/react-spring-slider";

const ArrowComponent = ({ onClick, direction }) => {
  // dont show a arrow if direction is left
  if (direction === "left") {
    return <div></div>;
  }

  // custom component
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1em",
        backgroundColor: "white",
        position: "absolute",
        top: "200px",
        right: 0,
      }}
      onClick={onClick}
    >
      {direction}
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Slider hasArrows ArrowComponent={ArrowComponent}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Slider>
      </main>
    </div>
  );
}
