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
      <main className="flex">
        <SideBar />
        <div> {children}</div>
      </main>
    </section>
  );
}
