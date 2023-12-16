import Navbar from "@/components/nav/navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div> {children}</div>
    </section>
  );
}
