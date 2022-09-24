import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Tests } from "./pages/Tests";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tests" element={<Tests />} />
    </Routes>
  )
}