import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1 className="bg-red-800">Welcome to adinotes</h1>} />
        </Route>
      </Routes>
    </>
  );
}
