import { MapPin, Mail, GraduationCap, Github } from "lucide-react";

const ProfileSidebar = () => {
  return (
    <aside className="w-full md:w-[250px] shrink-0 text-center md:text-left">
      {/* Avatar */}
      <div className="w-36 h-36 mx-auto md:mx-0 rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground font-serif mb-4 overflow-hidden">
        SR
      </div>

      {/* Name & title */}
      <h2 className="text-xl font-bold text-muted-foreground mb-1" style={{ fontFamily: "'Roboto Slab', serif" }}>
        Shiyang Ruan
      </h2>
      <p className="text-sm text-muted-foreground mb-0.5">Postdoc Researcher</p>
      <p className="text-sm text-muted-foreground mb-4">George Mason University</p>

      {/* Info links */}
      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        <span className="flex items-center gap-2 justify-center md:justify-start">
          <MapPin size={14} className="shrink-0" /> Fairfax, VA & Denver, CO
        </span>
        <a href="mailto:sruan@gmu.edu" className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground hover:text-primary">
          <Mail size={14} className="shrink-0" /> Email
        </a>
        <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground hover:text-primary">
          <GraduationCap size={14} className="shrink-0" /> Google Scholar
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground hover:text-primary">
          <Github size={14} className="shrink-0" /> GitHub
        </a>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
