import PageLayout from "@/components/PageLayout";

const experiences = [
  {
    title: "Postdoc Researcher",
    org: "Center for Geospatial Intelligence, George Mason University",
    period: "Sep 2025 – Present",
    location: "Fairfax, VA",
    bullets: [
      "Built a geospatial data pipeline integrating open source dataset like building footprints, land use, and census data to generate fine-resolution population surfaces.",
      "Automated data cleaning, feature engineering, spatial validation workflows and ensure model robustness.",
      "Integrated high-resolution population outputs into an agent-based mobility simulation framework to improve travel demand allocation and downstream traffic prediction accuracy.",
    ],
  },
  {
    title: "Graduate Research Assistant",
    org: "George Mason University",
    period: "Jan 2018 – Aug 2025",
    location: "Fairfax, VA",
    bullets: [
      "Designed affordable housing data panel and spatial demand analysis for Fairfax County using geospatial databases and web mapping (Google Map API, Leaflet, Folium).",
      "Achieved 97% accuracy in CNN-based land cover detection using social media image data.",
      "Implemented ML models on Youth Survey data to explore factors affecting teenager mental health, presenting findings at public meetings.",
      "Constructed 21 transit indicators for DC Metro area transit assessment and identified spatial clustering zones for transit-dependent populations.",
      "Generated 4M synthetic population for DC-MD-VA region and adopted agent-based modeling to estimate 11M trips with 97% accuracy matching real-world records.",
    ],
  },
];

const education = [
  { degree: "PhD, Geoinformation Science", school: "George Mason University, VA", year: "2025" },
  { degree: "MS, Geography (Land Use & Natural Resource Management)", school: "Minnesota State University, MN", year: "2015" },
  { degree: "BS, Geoinformation Systems", school: "Wuhan University of Technology, PRC", year: "2011" },
];

const skills = {
  "Programming": ["Python", "R", "SQL", "Java", "JavaScript"],
  "ML / Deep Learning": ["Pandas", "Scikit-learn", "PyTorch", "TensorFlow", "Keras", "A/B Testing"],
  "Databases": ["PostgreSQL", "PostGIS", "MySQL", "MongoDB"],
  "Big Data": ["AWS", "Hadoop MapReduce", "Hive", "HBase", "Spark"],
  "Tools": ["VS Code", "PyCharm", "Jupyter Notebook", "GitHub"],
  "Analytics": ["Microsoft Excel", "Tableau"],
};

const Background = () => {
  return (
    <PageLayout subtitle="Data Scientist · Geospatial Researcher">
      {/* Table of contents */}
      <div className="border border-border rounded mb-10">
        <div className="bg-muted px-4 py-2 text-sm font-bold flex items-center gap-2">
          📋 On this page
        </div>
        <div className="px-4 py-2 text-sm space-y-1">
          <a href="#experience" className="block text-muted-foreground hover:text-primary">Research experience</a>
          <a href="#education" className="block text-muted-foreground hover:text-primary">Education</a>
          <a href="#skills" className="block text-muted-foreground hover:text-primary">Technical skills</a>
        </div>
      </div>

      {/* Experience */}
      <h2 id="experience" className="text-2xl font-bold text-foreground mb-6">Research experience</h2>
      <div className="space-y-8 mb-12">
        {experiences.map((exp, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                <p className="text-muted-foreground text-sm">{exp.org}</p>
              </div>
              <p className="text-muted-foreground text-sm shrink-0 mt-1 sm:mt-0">
                {exp.period} · {exp.location}
              </p>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-foreground">
              {exp.bullets.map((b, j) => (
                <li key={j} className="leading-relaxed">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <h2 id="education" className="text-2xl font-bold text-foreground mb-6">Education</h2>
      <div className="space-y-4 mb-12">
        {education.map((edu, i) => (
          <div key={i}>
            <h3 className="font-bold text-foreground">{edu.degree}</h3>
            <p className="text-sm text-muted-foreground">{edu.school}, {edu.year}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h2 id="skills" className="text-2xl font-bold text-foreground mb-6">Technical skills</h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-bold text-foreground text-sm">{category}</h3>
            <p className="text-sm text-muted-foreground">{items.join(", ")}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Background;
