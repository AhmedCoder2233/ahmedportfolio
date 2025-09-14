import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFastapi, SiPostgresql, SiRedis } from "react-icons/si";
import { TbDatabaseCog } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { MdOutlineMemory } from "react-icons/md";
import { RiRssLine } from "react-icons/ri"; // placeholder for RAG/Langmem
import { GiBrain } from "react-icons/gi"; // placeholder for AI agents
import { GrNode } from "react-icons/gr"; // placeholder for n8n/WebSocket

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Framer Motion", icon: <MdOutlineMemory className="text-pink-500" /> }, // placeholder, no official framer-motion icon
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "NeonDB", icon: <TbDatabaseCog className="text-green-400" /> },
  { name: "ChromaDB", icon: <TbDatabaseCog className="text-purple-400" /> },
  { name: "OpenAI Agents SDK", icon: <AiOutlineApi className="text-sky-400" /> },
  { name: "MCP", icon: <GiBrain className="text-indigo-400" /> },
  { name: "RAG", icon: <RiRssLine className="text-teal-400" /> },
  { name: "Langmem", icon: <MdOutlineMemory className="text-indigo-400" /> },
  { name: "n8n", icon: <GrNode className="text-red-500" /> },
  { name: "WebSocket", icon: <GrNode className="text-green-500" /> },
  { name: "Redis", icon: <SiRedis className="text-red-600" /> },
];

export default function SkillsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 via-purple-900 to-black text-white overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          My <span className="text-purple-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-purple-500/30 transition-all"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
