import { Route, Routes } from "react-router-dom";
import { Like } from "./pages/ButtonLike";

import { Home } from "./pages/Home";
import { TestsForm } from "./pages/TestsForm";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tests" element={<TestsForm />} />
      <Route path="/like" element={<Like />} />
    </Routes>
  )
}