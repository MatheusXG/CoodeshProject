import { Route, Routes } from "react-router-dom";
import { AuthenticationForm } from "./pages/AuthenticationForm";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationForm />} />
    </Routes>
  );
}
