import MobileFooter from "./MobileFooter";
import DesktopSidebar from "./DesktopSidebar";

async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
