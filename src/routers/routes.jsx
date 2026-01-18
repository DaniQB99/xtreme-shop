import { Routes, Route } from "react-router-dom";
import { Home, Login } from "../index";
import { UserAuth } from "../context/AuthContext";
import { ProtectedRoute } from "../hooks/ProtectedRoute";

export function MyRoutes() {
  const { user } = UserAuth();
  return (
    <Routes>
      {/* <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
      </Route> */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
