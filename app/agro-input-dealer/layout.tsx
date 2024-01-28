import SideBar from "./dealer-sidebar";

export default function AgentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>
        <div className="flex">
          <SideBar />
          <div className="min-h-screen w-full"> {children}</div>
        </div>
      </main>
    </section>
  );
}
