"use client";
import Header from "@/components/admindashboard/common/Header";
import SideBar from "@/components/admindashboard/common/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex flex-col w-full">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-48">
          <SideBar />
        </aside>

        {/* Page Content */}
        <div className="flex-grow">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
