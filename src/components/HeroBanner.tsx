interface HeroBannerProps {
  subtitle?: string;
}

const HeroBanner = ({ subtitle = "Data Scientist · Geospatial Researcher" }: HeroBannerProps) => {
  return (
    <div
      className="relative w-full py-16 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0) 60%), url('/images/header-bg.jpg')`,
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-2">
          Shiyang Ruan
        </h1>
        <p className="text-white/90 text-lg">
          {subtitle}
          <br />
          <em className="text-white/80">Geospatial data pipelines, AI/ML, and agent-based simulation</em>
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
