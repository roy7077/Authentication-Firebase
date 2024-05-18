import { Inter } from "next/font/google";
import "./globals.css";
import { FirebaseProvider } from "./context/firebase";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <FirebaseProvider>
              {children}
          </FirebaseProvider>
      </body>
    </html>
  );
}
