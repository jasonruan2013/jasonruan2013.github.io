import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const researchInterests = [
  "Geospatial Data Science",
  "Human Mobility Modeling",
  "Agent-Based Simulation",
  "Machine Learning & Deep Learning",
  "Urban Analytics",
  "Public Transit & Smart Cities",
];

const Home = () => {
  return (
    <PageLayout subtitle="Data Scientist · Geospatial Researcher">
      <h2 className="text-2xl font-bold text-foreground mb-6">About</h2>

      <p className="text-foreground leading-relaxed mb-4">
        I'm a data scientist and geospatial researcher with expertise in building scalable data pipelines,
        advanced AI/ML models, and large-scale agent-based simulations of human mobility. My work bridges
        geospatial intelligence, urban analytics, and computational social science.
      </p>

      <p className="text-foreground leading-relaxed mb-4">
        I'm currently a Postdoc Researcher at the{" "}
        <strong>Center for Geospatial Intelligence, George Mason University</strong>, where I work on
        fine-granularity population estimation and mobility simulation, integrating open-source geospatial
        datasets to generate high-resolution population surfaces and improve travel demand forecasting.
      </p>

      <div className="bg-secondary border border-border rounded p-4 my-8 text-sm">
        <p className="font-bold mb-1">Quick links:</p>
        <p>
          <Link to="/publications" className="text-primary hover:underline">Publications</Link>
          {" · "}
          <Link to="/background" className="text-primary hover:underline">Background & Experience</Link>
          {" · "}
          <Link to="/research" className="text-primary hover:underline">Research</Link>
        </p>
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-6">Research interests</h2>
      <ul className="list-disc list-inside space-y-1 text-foreground">
        {researchInterests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </PageLayout>
  );
};

export default Home;
