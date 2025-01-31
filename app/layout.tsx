import React from "react";
import { Metadata } from "next";

import "../styles/index.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "AV.NextJsPlayground",
  description: "Generated by varivonchikartem@gmail.com",
  icons: { icon: "/favicon.ico?v=4" },
};

export default function RootLayout(props: RootLayoutProps): React.ReactElement {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
