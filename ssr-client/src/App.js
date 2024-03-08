import logo from "./logo.svg";
import "./App.css";
import Cars from "./Cars";
import { lazy } from "react";
import { Suspense } from "react";

const CarsComponent = lazy(() => import("./Cars.js"));

const LoadingScreen = () => {
  return <div>Loading....</div>;
};
function App() {
  return (
    <div className="App">
      React 18 SSR
      <Suspense fallback={LoadingScreen}>
        <CarsComponent />
      </Suspense>
    </div>
  );
}

export default App;
