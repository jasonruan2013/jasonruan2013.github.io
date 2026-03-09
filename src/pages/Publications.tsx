import PageLayout from "@/components/PageLayout";

const publications = [
  {
    title: "Function and form of U.S. cities",
    authors: "S. Reia, T. Anderson, H. Arruda, K. Atwal, S. Ruan, H. Kavak, D. Pfoser",
    journal: "Computers, Environment and Urban Systems",
    year: 2024,
    volume: "116",
  },
  {
    title: "An OpenStreetMap derived building classification dataset for the United States",
    authors: "H. Arruda, S. Reia, S. Ruan, K. Atwal, H. Kavak, T. Anderson, D. Pfoser",
    journal: "Scientific Data",
    year: 2024,
    volume: "11(1), 1210",
  },
  {
    title: "The Patterns of Life Human Mobility Simulation",
    authors: "H. Amiri, W. Kohn, S. Ruan, J. Kim, H. Kavak, A. Crooks, D. Pfoser, C. Wenk, A. Züfle",
    journal: "ACM SIGSPATIAL 2024",
    year: 2024,
  },
  {
    title: "Massive Trajectory Data Based on Patterns of Life",
    authors: "H. Amiri, S. Ruan, J. Kim, H. Jin, H. Kavak, A. Crooks, D. Pfoser, C. Wenk, A. Zufle",
    journal: "ACM SIGSPATIAL 2023",
    year: 2023,
  },
  {
    title: "Spatiotemporal Patterns and Driving Factors on Crime Changing During Black Lives Matter Protests",
    authors: "Z. Zhang, D. Sha, B. Dong, S. Ruan et al.",
    journal: "ISPRS IJGI 9(11), 640",
    year: 2020,
  },
  {
    title: "Spatiotemporal analysis of medical resource deficiencies in the US under COVID-19 pandemic",
    authors: "D. Sha, X. Miao, H. Lan, K. Stewart, S. Ruan et al.",
    journal: "PLoS ONE 15(10)",
    year: 2020,
  },
  {
    title: "A state-level socioeconomic data collection of the United States for COVID-19 research",
    authors: "D. Sha, A.S. Malarvizhi, Q. Liu, Y. Tian, Y. Zhou, S. Ruan et al.",
    journal: "Data 5(4), 118",
    year: 2020,
  },
];

const Publications = () => {
  return (
    <PageLayout subtitle="Data Scientist · Geospatial Researcher">
      <h2 className="text-2xl font-bold text-foreground mb-6">Selected publications</h2>

      <ul className="space-y-4">
        {publications.map((pub, i) => (
          <li key={i} className="text-foreground text-sm leading-relaxed">
            <strong>{pub.title}</strong>
            {" — "}
            <em>{pub.journal}</em>
            {" "}({pub.year}).
            <br />
            <span className="text-muted-foreground">{pub.authors}</span>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
};

export default Publications;
