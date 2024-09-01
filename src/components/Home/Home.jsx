import { useState, useRef, useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
const options = {
  root: null, // null means it's the viewport
  rootMargin: "0px",
  threshold: 0.2, // 20% of the element is in the viewport
};

const Home = (props) => {
  const [count, setCount] = useState(0);
  const [imgState, setImgState] = useState({
    imageTree: "",
    imageBuilding: "",
    imageCow: "",
  });
  const myImageRef = useRef();
  const intersectionHandler = (entries) => {
    if (entries[0].isIntersecting) {
      console.log("Now Intersect and Now we will set the image in state");
      setImgState({ ...currentImage });
    }
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      intersectionHandler,
      options
    );

    if (myImageRef.current) {
      intersectionObserver.observe(myImageRef.current);
    }

    return () => {
      if (myImageRef.current) {
        intersectionObserver.unobserve(myImageRef.current);
      }
    };
  }, []);

  const currentImage = {
    imageTree:
      "https://images.pexels.com/photos/21245316/pexels-photo-21245316/free-photo-of-potted-cactus-plant.jpeg",
    imageBuilding:
      "https://images.pexels.com/photos/20284614/pexels-photo-20284614/free-photo-of-balconies-on-residential-building-wall.jpeg",
    imageCow:
      "https://images.pexels.com/photos/28051896/pexels-photo-28051896/free-photo-of-a-cow-standing-in-a-field-with-a-bridge-in-the-background.jpeg",
  };
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div ref={myImageRef}>
        <img
          src={imgState.imageTree}
          alt="test with HQ image"
          width="500px"
          height="500px"
        />
        <img
          src={imgState.imageBuilding}
          alt="test with HQ image"
          width="500px"
          height="500px"
        />
        <img
          src={imgState.imageCow}
          alt="test with HQ image"
          width="500px"
          height="500px"
        />
      </div>
    </div>
  );
};

export default Home;
