import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const researchImages = [
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    title: "Geospatial Data Pipeline",
    description: "Automated pipeline integrating building footprints, land use, and census data for population estimation.",
  },
  {
    src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop",
    title: "Human Mobility Simulation",
    description: "Agent-based model simulating 4M synthetic population and 11M daily trips in the DC-MD-VA region.",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    title: "Urban Analytics Dashboard",
    description: "Interactive visualization of transit performance indicators and spatial clustering zones.",
  },
  {
    src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    title: "CNN Land Cover Detection",
    description: "Deep learning model achieving 97% accuracy in land cover classification from social media imagery.",
  },
  {
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
    title: "Smart City Transit Analysis",
    description: "Spatial demand analysis tools for affordable housing planning and transit-dependent populations.",
  },
  {
    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    title: "Population Surface Modeling",
    description: "Fine-resolution population surfaces generated from open-source geospatial datasets.",
  },
];

const Gallery = () => {
  const [selected, setSelected] = useState<typeof researchImages[0] | null>(null);

  return (
    <PageLayout subtitle="Data Scientist · Geospatial Researcher">
      <h2 className="text-2xl font-bold text-foreground mb-2">Research highlights</h2>
      <p className="text-muted-foreground mb-8 text-sm">
        Visual snapshots from ongoing and completed research projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {researchImages.map((img) => (
          <button
            key={img.title}
            onClick={() => setSelected(img)}
            className="group text-left border border-border rounded overflow-hidden bg-card hover:shadow-md transition-shadow"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-foreground mb-1">{img.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{img.description}</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selected && (
            <>
              <img
                src={selected.src.replace("w=600&h=400", "w=1200&h=800")}
                alt={selected.title}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{selected.title}</h3>
                <p className="text-sm text-muted-foreground">{selected.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Gallery;
