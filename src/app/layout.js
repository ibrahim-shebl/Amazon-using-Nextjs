import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "@/components/Layout";
import Header from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Footer from "@/components/Footer";
 

export const metadata = {
  title: "Amazon",
  description: "Welcome To Application",
};
<div className="font-bodyFont bg-gray-300"></div>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=
          "font-bodyFont bg-gray-300" 
      >
        <Layout>
          <Header />
          <BottomHeader />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
