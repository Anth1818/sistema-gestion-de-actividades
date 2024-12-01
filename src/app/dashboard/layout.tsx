"use client";

import { ToggleDarkMode } from "@/components/toggle-dark-mode";
import { AvatarOptions } from "@/components/avatar-options";
import { useParams } from "next/navigation";
import Navigation from "@/components/navigation";
import ProtectedRoute from "@/components/protected-route";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const urlParams = useParams();

  // console.log(urlParams);

  return (
    <ProtectedRoute>
      <>
        <nav className="fixed  h-12 bg-primary border-b border-gray-200 z-30 w-full lg:h-15 dark:bg-dark ">
          <div className="px-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center border-[1px] rounded-sm border-white lg:border-none mt-[2px]">
                <button
                  id="toggleSidebarMobile"
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="lg:hidden text-white cursor-pointer p-1 focus:ring-2 focus:ring-white rounded"
                >
                  <svg
                    id="toggleSidebarMobileHamburger"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    id="toggleSidebarMobileClose"
                    className="w-6 h-6 hidden"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* Logo */}
                {/* <div className="hidden lg:inline mt-1">
                  <Image src={Logo} alt="Logo" width={70} height={70} className="dark:bg-dark bg-white rounded-sm top-0" />
                </div> */}
              </div>
              <div className="flex items-end gap-4 mt-[6px]">
                <AvatarOptions />
                <ToggleDarkMode />
                {/* User Avatar */}
              </div>
            </div>
          </div>
        </nav >
        <div className="flex overflow-hidden bg-white pt-16 dark:bg-dark">
          <aside
            id="sidebar"
            className="fixed hidden z-20 h-full top-0 left-0 pt-40 lg:flex flex-shrink-0 flex-col w-60 transition-width duration-75 border-r-2 dark:border-dark-foreground"
            aria-label="Sidebar"
          >
            <div className="relative flex-1 flex flex-col min-h-0 borderR border-gray-200 bg-white pt-0 dark:bg-dark">
              <div className="flex-1 flex flex-col pb-4 overflow-y-auto dark:bg-dark">
                <div className="flex-1 px-3 bg-white divide-y space-y-1 dark:bg-dark">
                  <ul className="space-y-2 pb-2 dark:bg-dark">
                    <Navigation />
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative dark:bg-dark lg:overflow-y-auto lg:ml-64"
          >
            <main className="dark:bg-dark">
              <div className=" px-4 md: dark:bg-dark" >
                <div className="w-full min-h-[calc(100vh-230px)]">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 overflow-x-auto max-h-[70vh] lg:max-h-[75vh] dark:bg-dark">
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    </ProtectedRoute>
  );
}
