import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({user, redirectTo, children}) => {
    if (user == null) {
        return <Navigate replace to={redirectTo} />;
      }
      //Outlet es un componente que renderiza el contenido de la ruta actual
      return children?children:<Outlet />;
}
