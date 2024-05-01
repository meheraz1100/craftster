import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import CraftCard from "../CraftCard/CraftCard";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";

const Home = () => {
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);

  const [dataLength, setDataLength] = useState(6);

  return (
    <>
      <Slider></Slider>
      <h1 className="text-6xl font-bold">Featured In.....</h1>
      <Marquee className="text-3xl">
        <img src="https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png" alt="" />
        <img className="mx-8" src="https://www.react-fast-marquee.com/static/media/princeton.5d0a5006.png" alt="" />
        <img src="https://www.react-fast-marquee.com/static/media/dell.09332c44.png" alt="" />
        <img src="https://www.react-fast-marquee.com/static/media/microsoft.4a9a93f0.png" alt="" />
      </Marquee>

      <div className="text-center text-6xl my-6">
        <h1
          style={{
            alignItems: "center",
            paddingTop: "5rem",
            margin: "auto 0",
            fontWeight: "normal",
          }}
        >
          You Can {" "}
          <span style={{ fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Add Your Craft", "Delete Your Craft", "View Your Craft", "Edit Your Craft"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
      <h1 className="text-5xl font-bold">Featured Crafts</h1>
      <div data-aos="zoom-in" className="grid md:grid-cols-2 gap-4 my-6">
        {crafts.slice(0, dataLength).map((craft) => (
          <CraftCard
            key={craft._id}
            craft={craft}
            crafts={crafts}
            setCrafts={setCrafts}
          ></CraftCard>
        ))}
      </div>
      <div className={dataLength === crafts.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(crafts.length)}
          className="btn text-2xl my-6 justify-center w-full"
        >
          Show All Arts
        </button>
      </div>
    </>
  );
};

export default Home;
