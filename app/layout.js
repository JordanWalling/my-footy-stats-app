import localFont from "next/font/local";

import "./globals.css";

export const metadata = {
  title: "My Footy Stats App",
  description: "Home to all the Footy Stats you need!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grass-wrapper">{children}</div>
      </body>
    </html>
  );
}
