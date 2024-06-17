import Navbar from "@/components/nav/navbar/navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div className="p-2 md:p-20"> {children}</div>
    </section>
  );
}
