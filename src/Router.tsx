import { Route, Routes } from "react-router-dom";
import { AuthenticationForm } from "./pages/AuthenticationForm";
import { HeaderMenuColored } from "./pages/HeaderMenuColored";

const user = {

    "name": "Jane Spoonfighter",
    "email": "janspoon@fighter.dev",
    "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
}
  
const tabs = [
    "Home",
    "Orders",
    "Education",
    "Community",
    "Forums",
    "Support",
    "Account",
    "Helpdesk"
]


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationForm />} />
      <Route path="/ola" element={<HeaderMenuColored user={user} tabs={tabs} />} />
    </Routes>
  );
}
