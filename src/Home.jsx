import { useState } from "react";
import LeftBox from "./assets/components/LeftBox";
import RightBox from "./assets/components/RightBox";
function Home() {
    const [stop, setStop] = useState("");

    console.log("stop", stop);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
        <h1>Welcome to CityRat!</h1>
        <div
          style={{ display: "flex", flexDirection: "row", backgroundColor: "#ffffff", width: "100vw", height: "80vh", alignItems: "center", justifyContent: "center" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              border: "2px solid rgb(0, 0, 0)",
              borderRadius: "8px",
            }}
          >
            <LeftBox setStop={setStop}/>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              border: "2px solid rgb(0, 0, 0)",
              borderRadius: "8px",
            }}
          >
            <RightBox stop={stop}  />
          </div>
        </div>
      </div>
  );
}

export default Home;
