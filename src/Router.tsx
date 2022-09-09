import { Route, Routes } from "react-router-dom";

import { AuthenticationForm } from "./pages/AuthenticationForm";
import { Home } from "./pages/Home";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationForm />} />
      <Route path="/home" element={<Home />} />

    </Routes>
  );
}
