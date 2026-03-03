import React from "react";
import Sidebar from "./components/wedding/Sidebar";

const PAGES_WITH_SIDEBAR = ["Accommodations", "Maps", "Schedules", "Registry"];

export default function Layout({ children, currentPageName }) {
  const showSidebar = PAGES_WITH_SIDEBAR.includes(currentPageName);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #C9A96E;
        }
      `}</style>

      {showSidebar ? (
        <div className="min-h-screen bg-[#FAFAF8]">
          <Sidebar currentPage={currentPageName} />
          <main className="lg:ml-64 min-h-screen">
            <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
              {children}
            </div>
          </main>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}