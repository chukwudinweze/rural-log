import Footer from "@/components/footer";
import Navbar from "@/components/nav/navbar/navbar";
import SideBar from "@/components/nav/sidebar/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <main>
        <div className="flex">
          <SideBar />
          <div className="min-h-screen"> {children}</div>
        </div>
        <Footer />
      </main>
    </section>
  );
}
