import "../globals.css";
import { Providers } from "@/components/Providers";

import Sidebar from "@/components/SideBar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Sidebar />
          <div className="m-4 p-4 shadow-xl shadow-blue-gray-900/5 bg-white rounded-xl md:m-8 ">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
