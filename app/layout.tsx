import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BijzonderNachtje — jouw bijzondere nachtje weg begint hier",
  description: "BijzonderNachtje verzamelt unieke overnachtingen in Nederland en daarbuiten: boshuisjes, tiny houses, wellnesshuisjes, spiegelhuisjes, glamping en romantische verblijven.",
  themeColor: "#5A2CA0",
  openGraph: {
    title: "BijzonderNachtje",
    description: "Ontdek unieke overnachtingen in Nederland en daarbuiten. Van boshuisjes tot wellnesshuisjes en romantische tiny houses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={rubik.variable}>
      <body className="font-sans antialiased">
        <a href="#content" className="skip-link">Direct naar inhoud</a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
