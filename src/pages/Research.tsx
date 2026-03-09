import PageLayout from "@/components/PageLayout";

const researchAreas = [
  {
    title: "Geospatial Data Science & Pipelines",
    description:
      "Building automated geospatial data pipelines that integrate building footprints, land use, census data, and other open-source datasets to generate fine-resolution population surfaces and support downstream analytics.",
  },
  {
    title: "Human Mobility & Agent-Based Simulation",
    description:
      "Developing large-scale agent-based models that simulate human mobility and travel demand. Generated 4M synthetic population for the DC-MD-VA region and estimated 11M daily trips with 97% accuracy matching real-world records.",
  },
  {
    title: "Machine Learning for Urban Analytics",
    description:
      "Applying ML/DL models to geospatial and social data—including CNN-based land cover detection from social media images (97% accuracy) and predictive modeling of youth mental health factors from survey data.",
  },
  {
    title: "Public Transit & Smart Cities",
    description:
      "Constructing transit performance indicators, identifying spatial clustering zones for transit-dependent populations, and designing spatial demand analysis tools for affordable housing planning.",
  },
];

const Research = () => {
  return (
    <PageLayout subtitle="Data Scientist · Geospatial Researcher">
      <h2 className="text-2xl font-bold text-foreground mb-8">Research areas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {researchAreas.map((area) => (
          <div key={area.title} className="border border-border rounded p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">{area.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Research;
