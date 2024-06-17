import Footer from "@/components/footer";
import Navbar from "@/components/nav/navbar/navbar";
import SideBar from "@/components/nav/sidebar/sidebar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <main>
        <div className="flex">
          <div className="hidden md:block">
            <SideBar />
          </div>
          <div className="min-h-screen"> {children}</div>
        </div>
        <Footer />
      </main>
    </section>
  );
}
