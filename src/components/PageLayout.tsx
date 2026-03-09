import Navbar from "./Navbar";
import HeroBanner from "./HeroBanner";
import ProfileSidebar from "./ProfileSidebar";

interface PageLayoutProps {
  children: React.ReactNode;
  subtitle?: string;
}

const PageLayout = ({ children, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner subtitle={subtitle} />

      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <ProfileSidebar />
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
