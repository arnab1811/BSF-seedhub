import type { Pathway, Project, Resource } from "@/types/content";

export const pathways: Pathway[] = [
  { id: "policy", number: 1, title: "National seed policy and regulatory framework", summary: "Create an enabling and locally appropriate foundation for seed-sector development.", priorities: ["Wider consultation on seed policy, law and regulation", "Technical working group under the Seed Hub", "Practical standard operating procedures"], status: "published" },
  { id: "coordination", number: 2, title: "Coordination, digital inclusion and partnerships", summary: "Build the relationships and information infrastructure needed for coherent action.", priorities: ["Seed Hub events at national and state levels", "A digital portal for knowledge and activities", "Investment in coordination and professional capacity"], status: "published" },
  { id: "relief", number: 3, title: "From seed relief to seed-sector development", summary: "Connect humanitarian response with local production and longer-term market development.", priorities: ["Link market-based interventions with local seed production", "Strengthen informal seed systems", "Develop rural agro-dealer networks"], status: "published" },
  { id: "farmer-systems", number: 4, title: "Farmer-based seed systems", summary: "Support local seed producers, farmer organizations and community seed banks.", priorities: ["Professional local seed businesses", "Decentralized quality assurance services", "Access to information, finance and suitable varieties"], status: "published" },
  { id: "private-sector", number: 5, title: "Private seed-sector development", summary: "Create a more transparent and enabling environment for responsible seed enterprise.", priorities: ["Innovative finance mechanisms", "Reliable access to foundation seed", "Effective and consistent certification"], status: "published" },
  { id: "quality", number: 6, title: "Decentralized seed quality assurance", summary: "Bring credible quality services closer to producers and farmers.", priorities: ["Validate a decentralized system", "Develop technical and laboratory capacity", "Agree roles, standards and service arrangements"], status: "published" },
  { id: "genebanks", number: 7, title: "A national genebank linked to community seed banks", summary: "Conserve and use crop diversity through connected national and community institutions.", priorities: ["Appoint a responsible institution and focal point", "Mobilize financial and human resources", "Collect, characterize, evaluate and use germplasm"], status: "published" },
  { id: "breeding", number: 8, title: "Crop breeding and access to new varieties", summary: "Strengthen research capacity and farmers’ access to well-adapted varieties.", priorities: ["Strengthen national agricultural research", "Build human and physical research capacity", "Expand regional technical and material cooperation"], status: "published" },
  { id: "egs", number: 9, title: "Public–private foundation seed production", summary: "Create dependable early-generation seed supply through clear operational partnerships.", priorities: ["Formalize an EGS operational framework", "Forecast demand and coordinate production", "Develop production and quality guidelines"], status: "published" },
  { id: "institutions", number: 10, title: "Capacity of government and public institutes", summary: "Build the people, infrastructure and institutions needed to sustain transformation.", priorities: ["Rehabilitate research facilities", "Update seed-related education and training", "Mobilize alternative resources for research"], status: "published" },
];

export const bsfProject: Project = {
  slug: "bsf",
  shortName: "BSF project",
  title: "Plant diversity, local value chains and shared knowledge",
  summary: "The regional BSF project sub-hub brings together its partners, activities, news, publications and resources in one shared space.",
  status: "provisional",
  workstreams: [
    { number: 1, title: "Adapted PGRFA managed or improved with farmers’ participation", description: "Activities support the conservation, management and improvement of adapted plant genetic resources through meaningful farmer participation." },
    { number: 2, title: "Enhanced local value chains to improve the production and consumption of adapted PGRFA", description: "Activities connect crop diversity with production, processing, markets and consumption through stronger local value chains." },
    { number: 3, title: "Mechanisms strengthened to enhance the sharing of PGRFA data, materials and knowledge", description: "Activities improve how project partners and wider seed-system actors exchange materials, information, evidence and practical learning." },
  ],
};

export const resources: Resource[] = [
  { id: "call-to-action", title: "Call to action: priorities and partnerships for South Sudan’s seed sector", type: "Policy brief", year: 2022, summary: "The evidence and stakeholder dialogue behind the ten pathways for transformation.", topics: ["Policy", "Coordination", "Resilience"], countries: ["South Sudan"], url: "https://arnab1811.github.io/webtest/call.pdf", external: true, status: "published" },
  { id: "genebanks-fragile-contexts", title: "Can international genebanks reach fragile contexts?", type: "Field insight", year: 2026, summary: "Lessons from Somaliland for strengthening adaptive capacity through participatory variety selection.", topics: ["Genebanks", "PVS", "Fragile contexts"], countries: ["Somaliland", "South Sudan"], url: "https://www.southsudanseedhub.com/", external: true, status: "published" },
  { id: "issd-resilience", title: "Cultivating resilience across Africa’s seed sector", type: "Regional perspective", year: 2025, summary: "A systems view of connections, learning and locally driven seed-sector transformation.", topics: ["ISSD", "Resilience", "Partnerships"], countries: ["Regional"], url: "https://www.southsudanseedhub.com/", external: true, status: "published" },
  { id: "faobfs", title: "The International Treaty’s Benefit-sharing Fund", type: "External resource", year: 2026, summary: "Official background on the Benefit-sharing Fund and its role in supporting plant genetic diversity.", topics: ["PGRFA", "Benefit sharing"], countries: ["Global"], url: "https://www.fao.org/plant-treaty/areas-of-work/benefit-sharing-fund/bsf-overview/en/", external: true, status: "published" },
];

export const organisations = [
  { name: "University of Juba", role: "Founding institution", location: "South Sudan" },
  { name: "Ministry of Agriculture and Food Security", role: "Public-sector partner", location: "South Sudan" },
  { name: "Directorate of Agricultural Research", role: "Research partner", location: "South Sudan" },
  { name: "Food and Agriculture Organization", role: "Programme partner", location: "Regional" },
  { name: "Wageningen University & Research", role: "Knowledge partner", location: "Netherlands" },
  { name: "Alliance of Bioversity International and CIAT", role: "Knowledge partner", location: "Regional" },
  { name: "ISSD Africa", role: "Seed-systems partner", location: "Regional" },
];
