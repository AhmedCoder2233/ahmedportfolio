import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-950 via-purple-900 to-black text-white" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">📞 Contact Me</h2>

        <div className="space-y-6 text-lg text-center">
          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:ahmedmemon3344@gmail.com" className="hover:underline">
              ahmedmemon3344@gmail.com
            </a>
          </p>

          <p className="flex items-center justify-center gap-3">
            <FaWhatsapp className="text-green-400" />
            <a
              href="https://wa.me/923368952826"
              target="_blank"
              className="hover:underline"
            >
              +92 336 8952826
            </a>
          </p>

          <p className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-red-400" />
            Karachi, Pakistan
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 text-2xl">
          <a href="https://www.linkedin.com/in/ahmed-memon-5550642b5/" target="_blank">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/AhmedCoder2233?tab=repositories" target="_blank">
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
