import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Voice AI Assistant For E-Commerce",
      img: "/pro1.png",
      tech: ["Next.js", "OpenAI Agents SDK", "FastAPI"],
    },
    {
      title: "Complete Automation For Restaurent",
      img: "/pro2.png",
      tech: ["n8n", "OpenAI Agents SDK", "FastAPI"],
    },
    {
      title: "Fully Automated AI Receptionist",
      img: "/pro3.png",
      tech: ["OpenAI Agents SDK", "FastAPI", "Reactjs"],
    },
    {
      title: "Fully Automated HR Agentic System",
      img: "/pro4.png",
      tech: ["n8n", "PostgreSQL", "Gemini"],
    },
    {
      title: "Full Stack E-Commerce Website",
      img: "/pro5.webp",
      tech: ["Next.js", "TypeScript", "Sanity"],
      link: "https://your-ecommerce-live-link.com", // live link yahan
    },
    {
      title: "Modern Minecraft Website/Store",
      img: "/pro6.webp",
      tech: ["Next.js", "Tailwind"],
      link: "https://your-minecraft-live-link.com", // live link yahan
    },
  ];

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-blue-950 via-purple-900 to-black text-white overflow-hidden"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-purple-800 via-blue-900 to-black p-1 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 h-full flex flex-col justify-between">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-purple-700/30 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Sirf agar link ho tab button show kare */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition"
                  >
                    🔗 Live Link
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
