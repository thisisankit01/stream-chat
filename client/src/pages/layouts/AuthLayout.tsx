import { Outlet, useLocation } from "react-router-dom";
import { FullScreenCard } from "../../components/FullScreenCard";
import Link from "../../components/Link";

export function AuthLayout() {
  const location = useLocation();
  const isLoadingPage = location.pathname === "/login";
  return (
    <FullScreenCard>
      <FullScreenCard.Body>
        <Outlet />
      </FullScreenCard.Body>
      <FullScreenCard.ContentBelowBody>
        <Link to={isLoadingPage ? "/signup" : "/login"}>
          {isLoadingPage ? "Create Account" : "Login"}
        </Link>
      </FullScreenCard.ContentBelowBody>
    </FullScreenCard>
  );
}
