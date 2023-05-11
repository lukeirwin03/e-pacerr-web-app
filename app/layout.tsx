import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "E-PACERR",
  description: "Website for E-PACERR Program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <main className="content">{children}
          <footer className="footer">
              [epacerr@gmail.com]   |   [Omaha, NE]   |   [Instagram: e.pacerrs]
          </footer>
        </main>
      </body>
    </html>
  );
}
