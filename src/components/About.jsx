import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <motion.div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-300 pb-2 animate-pulse">
          About Me
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Hello! I’m <span className="font-bold text-gray-900">Ashish Rajput</span>, a highly motivated and enthusiastic{" "}
          <span className="text-blue-600 font-semibold">Java Developer Intern</span> with a strong foundation in{" "}
          <span className="text-green-600 font-semibold">Spring Boot</span>,{" "}
          <span className="text-yellow-600 font-semibold">MySQL</span>,{" "}
          <span className="text-red-500 font-semibold">HTML/CSS</span>,{" "}
          <span className="text-purple-600 font-semibold">JavaScript</span> and{" "}
          <span className="text-teal-600 font-semibold">React JS</span>. I enjoy building real-world full-stack applications, solving backend challenges, and continuously improving through hands-on coding and collaborative projects.
        </p>

        <Section title="🎯 Objective">
          Seeking an internship opportunity where I can contribute to innovative projects, gain practical industry
          exposure, and strengthen my backend development skills using Java and Spring Boot technologies.
        </Section>

        <Section title="🎓 Education">
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>B.Tech (Computer Science)</strong> – Indus University, 2022–2026 (7th Sem)<br />
              <span className="text-sm text-gray-600">CGPA: 9.68 / 10</span>
            </li>
            <li>
              Higher Secondary (XII) – Gujarat Board, 2021–2022 <br />
              <span className="text-sm text-gray-600">Score: 85%</span>
            </li>
            <li>
              Secondary School (X) – Gujarat Board, 2019–2020 <br />
              <span className="text-sm text-gray-600">Score: 92%</span>
            </li>
          </ul>
        </Section>

        <Section title="🛠 Skills">
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Languages & Tools:</strong> Java, Spring Boot, MySQL, SQL, REST APIs, HTML, CSS, JavaScript, React JS, Git & GitHub</li>
            <li><strong>Frameworks & Build Tools:</strong> Spring Framework, Maven, Gradle</li>
            <li><strong>IDEs:</strong> IntelliJ IDEA, Eclipse, VS Code</li>
            <li><strong>Soft Skills:</strong> Problem-solving, Team Collaboration, Agile, Communication, Fast Learner</li>
          </ul>
        </Section>

        <Section title="📂 Project Highlight">
          <strong>Contact Management System</strong> (Spring Boot + JSP + MySQL)<br />
          Developed a full-stack Contact Book app supporting user registration, contact CRUD operations, file uploads, pagination, AJAX live search, and REST APIs. Demonstrates my grasp on MVC, backend integration, and relational DB management.
        </Section>

        <Section title="📚 Certifications">
          <ul className="list-disc pl-6 text-gray-700">
            <li>Java Programming Course – ScholarHat (2024)</li>
            <li>Covered OOP, File Handling, Collections, and hands-on Java projects</li>
          </ul>
        </Section>

        <Section title="📞 Contact Info">
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>Email:</strong> <a href="mailto:ashishrajput6768@gmail.com" className="text-blue-600 underline">ashishrajput6768@gmail.com</a></li>
            <li><strong>Phone:</strong> +91-7600307853</li>
            <li><strong>Location:</strong> Ahmedabad, Gujarat</li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/AshishRajput18" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                github.com/AshishRajput18
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/rajput-ashish-880162369" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                linkedin.com/in/rajput-ashish-880162369
              </a>
            </li>
          </ul>
        </Section>

        <Section title="✨ Summary">
          As an aspiring Java Developer, I am committed to solving problems through elegant code, learning continuously, and building impactful software. My goal is to work in agile teams and contribute meaningfully to real-world projects.
        </Section>

        {/* Resume Download Button */}
        <div className="mt-8 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Ashish_Rajput_Resume.pdf"
            download
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300 shadow-md"
          >
            <FaDownload /> Download Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Reusable Section component
const Section = ({ title, children }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-xl font-semibold text-green-600 mb-2">{title}</h2>
    <div>{children}</div>
  </motion.div>
);

export default About;
