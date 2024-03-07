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
      <Suspense fallback={LoadingScreen}>
        React 18 SSR
        <CarsComponent />
      </Suspense>
    </div>
  );
}

export default App;
