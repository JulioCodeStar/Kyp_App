import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Footer, Header } from "../../../components/LayoutComponents/";
import { cn } from "../../../lib/utils";
import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export default function MainLayout() {
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const currentTime = Date.now() / 1000;
        const tokenExp = JSON.parse(atob(token.split(".")[1])).exp;

        if (tokenExp < currentTime) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          navigate("/login");
        } else if (tokenExp > currentTime) {
          const currentPathname = window.location.pathname;
          navigate(currentPathname);
          setShowPage(true);
        } else {
          setShowPage(true);
        }
      } catch (error) {
        console.error("Token inválido", error);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      {showPage && (
        <>
          <Sidebar />
          <main
            className={cn(
              "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
              sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-[256px]"
            )}
          >
            <Header>
              <Outlet />
            </Header>
          </main>
          <footer
            className={cn(
              "transition-[margin-left] ease-in-out duration-300",
              sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-[256px]"
            )}
          >
           <Footer /> 
          </footer>
        </>
      )}
    </>
  );
}
