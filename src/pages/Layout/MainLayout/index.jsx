import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {Header, Sidebar} from '../../../components/LayoutComponents/'

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
          navigate("/");
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

  return (
    <>
      <div className="bg-[#FCFCFC] min-h-screen lg:flex">
        {showPage && (
          <>
            <Sidebar />
            <div className="flex flex-col flex-1">
              <Header />
              <div className="px-8 pt-4 h-screen">
                <Outlet />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
