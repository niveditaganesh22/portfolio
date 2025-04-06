import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-vh-100 text-light"
      style={{
        background: "linear-gradient(to right, #014421, #022c22, #001f1f)",
        fontFamily: "'Georgia'",
        lineHeight: 2,
      }}
    >
      {/* Sticky Navbar */}
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top shadow-sm animated-nav py-2">
        <div className="container-fluid">
          <button
            type="button"
            className="navbar-brand d-flex align-items-center gap-2 bg-transparent border-0 text-light"
            style={{ cursor: "pointer" }}
          >
            <img
              src="/logo.png"
              alt="Nivedita Ganesh Logo"
              className="logo-spin"
              style={{ height: "36px" }}
            />
            <span
              className="d-none d-sm-inline"
              style={{ fontSize: "1rem", fontWeight: "500" }}
            >
              Nivedita Ganesh
            </span>
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-end">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certifications">
                  Certifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between px-4 py-5"
        style={{ minHeight: "100vh", paddingTop: "6rem" }}
      >
        <div
          className="text-center text-md-start col-12 col-md-6 mb-4 mb-md-0"
          data-aos="fade-right"
        >
          <h1
            className="fw-bold"
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize: "2.5rem",
            }}
          >
            Hello! I'm <span style={{ color: "#ffffff" }}>Nivedita Ganesh</span>
          </h1>
          <p className="lead mt-3" style={{ fontSize: "1.2rem" }}>
            Senior Software Engineer and DevOps Engineer based in Toronto
          </p>
          <a
            href="#about"
            className="btn btn-outline-light mt-3 px-4 py-2 fw-semibold"
          >
            LET'S START
          </a>
        </div>

        <div
          className="col-12 col-md-6 d-flex justify-content-center align-items-center"
          data-aos="zoom-in"
        >
          <img
            src="/profile.jpg"
            alt="Nivedita Ganesh"
            className="shadow-lg img-fluid"
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "auto",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="container text-center my-5 border-top pt-5"
        data-aos="fade-down"
      >
        <h2 className="mb-3" data-aos="fade-down" data-aos-duration="800">
          About <span style={{ color: "#ffffff" }}>Me.</span>
        </h2>

        <p
          className="fw-bold mb-3"
          data-aos="flip-left"
          data-aos-duration="700"
          style={{ fontSize: "1.1rem" }}
        >
          I build systems that run smooth, scale smart, and don’t page you at 3
          AM.
        </p>

        <p
          style={{ fontSize: "1.05rem", color: "#ccc" }}
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          I started out writing full-stack code — still do when needed — but
          somewhere along the way, I fell for clean pipelines, automation, and
          infra that behaves itself. These days, I focus on building systems
          that are reliable, observable, and easy to ship — the kind that don’t
          break just because someone blinked.
        </p>

        <p
          style={{ fontSize: "1.05rem", color: "#ccc" }}
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          I’m big on writing code that future-me won’t curse, automating the
          boring parts, and making sure the whole system tells a story when
          things go wrong. If you love clean deployments and efficient
          debugging, we’ll get along.
        </p>

        <hr
          className="mt-5"
          style={{
            borderTop: "2px solid #555",
            opacity: 1,
          }}
          data-aos="fade"
          data-aos-duration="600"
          data-aos-delay="300"
        />
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-5 text-light">Skills & Tools</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {[
            {
              title: "Frontend Development",
              icon: "🎨",
              items: [
                "React",
                "Next.js",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Tailwind",
              ],
            },
            {
              title: "Backend Engineering",
              icon: "🛠️",
              items: ["Node.js", "Express", "Python", "Java", "REST APIs"],
            },
            {
              title: "DevOps & Cloud",
              icon: "☁️",
              items: [
                "AWS",
                "Azure",
                "Terraform",
                "Docker",
                "Kubernetes",
                "Jenkins",
              ],
            },
            {
              title: "Databases",
              icon: "🗄️",
              items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
            },
            {
              title: "Automation & Scripting",
              icon: "⚙️",
              items: ["Shell Scripting", "Ansible", "CI/CD", "GitHub Actions"],
            },
            {
              title: "Monitoring & Tools",
              icon: "📊",
              items: ["Prometheus", "Grafana", "Git", "Postman", "Figma"],
            },
          ].map((skill, index) => (
            <div
              className="col d-flex"
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div
                className="p-4 rounded-4 text-light skill-box flex-fill"
                style={{
                  backgroundColor: "rgba(0, 32, 25, 0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 0 15px rgba(0,255,170,0.1)",
                  transition: "all 0.4s ease",
                }}
              >
                <h5 className="mb-3">
                  <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>
                    {skill.icon}
                  </span>
                  {skill.title}
                </h5>
                <ul className="list-unstyled mb-0">
                  {skill.items.map((item, i) => (
                    <li key={i} className="mb-1">
                      <span className="me-2 text-success">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .skill-box:hover {
            transform: translateY(-8px) scale(1.02) rotateX(3deg);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.6);
          }
        `}</style>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="container my-5 pt-5 border-top"
        data-aos="fade-up"
        style={{ fontSize: "0.95rem" }}
      >
        <h2 className="text-center mb-5">Professional Experience</h2>
        <div className="timeline position-relative ps-3 ps-md-4">
          {[
            {
              title: "Senior Software Engineer",
              company: "Altimetrik India Pvt. Ltd.",
              duration: "Mar 2022 – Oct 2023",
              description:
                "At Altimetrik, I led the cloud migration of legacy applications to AWS, architecting scalable solutions with EC2, RDS, and S3. I modernized infrastructure using Terraform and CloudFormation, and implemented CI/CD pipelines with Jenkins and Ansible...",
            },
            {
              title: "Full-Stack Developer",
              company: "Speak Ai Inc.",
              duration: "Nov 2021 – Feb 2022",
              description:
                "At Speak Ai, I developed full-stack features across web and backend services, supporting scalable media analysis tools...",
            },
            {
              title: "Software Developer",
              company: "Noontide Service Corporation",
              duration: "Mar 2021 – Nov 2021",
              description:
                "I built scalable client-server applications for construction and logistics platforms, optimizing data responsiveness...",
            },
            {
              title: "Systems Specialist – Program Analyst",
              company: "IBM",
              duration: "May 2017 – Apr 2018",
              description:
                "At IBM, I developed backend services using Node.js and maintained integrations with MySQL and MongoDB...",
            },
          ].map((exp, index) => (
            <div
              key={index}
              className="timeline-item mb-4 position-relative"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <span
                className="timeline-dot position-absolute top-0 start-0 translate-middle rounded-circle d-none d-sm-block"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#00ffaa",
                }}
              ></span>
              <div
                className="card text-light ms-sm-3"
                style={{
                  backgroundColor: "rgba(0, 32, 25, 0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "1rem",
                  boxShadow: "0 0 15px rgba(0,255,170,0.1)",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-1">{exp.title}</h5>
                  <h6 className="card-subtitle mb-2 text-info">
                    {exp.company} | {exp.duration}
                  </h6>
                  <p className="card-text">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="container my-5 border-top pt-5"
        data-aos="fade-up"
        style={{ fontSize: "0.95rem" }}
      >
        <h2
          className="text-center mb-4"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Education
        </h2>

        {[
          {
            logo: "/carleton.png",
            alt: "Carleton University Logo",
            title: "Carleton University",
            degree: "Master of Engineering in Systems and Computer Engineering",
            location: "Ottawa, Canada",
            details:
              "My journey at Carleton was both rigorous and rewarding — I dove deep into advanced systems concepts while juggling real-world applications. The academic rigor paid off with a 4.9 GPA, and I was honored with a Teaching Assistantship that let me guide undergrads and sharpen my own grasp on core subjects.",
          },
          {
            logo: "/pec.png",
            alt: "Prathyusha Engineering College Logo",
            title: "Prathyusha Engineering College",
            degree:
              "Bachelor of Engineering in Electronics & Communication Engineering",
            location: "Chennai, India",
            details:
              "My undergrad was a vibrant blend of academics and leadership. I took on the role of Student Vice-President, organized a national-level symposium, and launched a Robotics Club in collaboration with IIT-M. Through our Entrepreneurship Cell, I even helped create and market tech gadgets — a fun mix of innovation and business. I graduated with a GPA of 4.2 and was named the “Most Promising Student” of the batch.",
          },
        ].map((edu, index) => (
          <div
            key={index}
            className="mb-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div
              className="card text-light p-4 d-flex flex-column align-items-center text-center"
              style={{
                backgroundColor: "rgba(0, 32, 25, 0.9)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1rem",
                boxShadow: "0 0 15px rgba(0,255,170,0.1)",
              }}
            >
              <img
                src={edu.logo}
                alt={edu.alt}
                className="mb-3"
                style={{
                  height: "50px",
                  filter: "drop-shadow(0 0 2px #ccc)",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{edu.title}</h5>
                <p className="mb-2">
                  <strong>{edu.degree}</strong>
                </p>
                <p className="text-secondary small fst-italic mb-3">
                  {edu.location}
                </p>
                <p>{edu.details}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="container my-5 border-top pt-5"
        data-aos="fade-up"
        style={{ fontSize: "0.95rem" }}
      >
        <h2
          className="text-center mb-5"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Licenses & Certifications
        </h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {[
            {
              logo: "/aws.png",
              alt: "AWS Logo",
              title: "AWS Certified Cloud Practitioner",
              org: "Amazon Web Services (AWS)",
              description:
                "Already deep into cloud and DevOps by the time I took this one — it was more about validating what I’d already been doing. Helped solidify the fundamentals around AWS services, architecture, and billing.",
              validity: "Valid through Dec 2027",
              link: "https://www.credly.com/earner/earned/badge/b5ab0110-5d9f-428f-9c19-022ed32904f4",
            },
            {
              logo: "/hashicorp.png",
              alt: "HashiCorp Logo",
              title: "Terraform Associate (003)",
              org: "HashiCorp",
              description:
                "Diving into Terraform felt like unlocking DevOps superpowers. This cert helped me confidently manage cloud infra as code — clean, modular, and automated.",
              validity: "Valid through Jul 2026",
              link: "https://www.credly.com/badges/691d8479-3a5b-40e7-a950-ae3fb871b4c9",
            },
            {
              logo: "/scrum.png",
              alt: "Scrum.org Logo",
              title: "Professional Scrum Master™ I (PSM I)",
              org: "Scrum.org",
              description:
                "After being part of agile teams for a while, I wanted to really get the “why” behind the process. This certification gave me that clarity — helped me lead better standups, retros, and drive real momentum in sprints.",
              validity: "Issued Sep 2023",
              link: "https://www.credly.com/earner/earned/badge/bd320c41-ba35-4307-9124-d79e896d7805",
            },
          ].map((cert, index) => (
            <div
              key={index}
              className="col d-flex align-items-stretch"
              data-aos="flip-left"
              data-aos-delay={100 * (index + 1)}
            >
              <div
                className="card text-light p-4 w-100 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "rgba(0, 32, 25, 0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "1rem",
                  boxShadow: "0 0 15px rgba(0,255,170,0.1)",
                }}
              >
                <img
                  src={cert.logo}
                  alt={cert.alt}
                  className="mb-3 mx-auto d-block"
                  style={{
                    height: "40px",
                    filter: "drop-shadow(0 0 2px #000)",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="text-secondary small fst-italic mb-2">
                    {cert.org}
                  </p>
                  <p>{cert.description}</p>
                  <p className="text-muted small">{cert.validity}</p>
                  <div className="mt-auto">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-outline-light btn-sm w-100"
                    >
                      Show Credential
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container my-5 pt-5 border-top"
        data-aos="fade-up"
        style={{ fontSize: "0.95rem" }}
      >
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {[
            {
              icon: "🛠",
              title: "Admin Application",
              description:
                "Designed an internal dashboard where the team could reprocess failed media, manage client data, and maintain application uptime. This app streamlined operational workflows and served as a control hub for backend tasks.",
              tech: "Tech Stack: Angular, Node.js, MongoDB, Docker",
            },
            {
              icon: "☁️",
              title: "Public Media Library",
              description:
                "Handled backend logic for managing heavy media uploads and analytics. Included scalable infrastructure setup and monitoring storage usage — integrating cloud storage and background processing.",
              tech: "Tech Stack: Angular, Node.js, MongoDB, AWS S3",
            },
            {
              icon: "🧰",
              title: "Construction Delegation Tool",
              description:
                "Developed tools for issue tracking, booking, and real-time alerts. Emphasized scalable API architecture and background job processing — aligning with infrastructure automation goals.",
              tech: "Tech Stack: React, Node.js, MongoDB, AWS EC2",
            },
            {
              icon: "📊",
              title: "Money Manager App",
              description:
                "Integrated AWS QuickSight for real-time reports. Deployed APIs and optimized backend logic for performance — touching cloud data handling and reporting pipelines.",
              tech: "Tech Stack: React, Node.js, MySQL, AWS QuickSight",
            },
            {
              icon: "🎟",
              title: "Help Desk Portal",
              description:
                "A ticket-based platform built for issue tracking and customer support workflows. Implemented ticket status handling, severity tagging, and update tracking, echoing monitoring and response workflows.",
              tech: "Tech Stack: React, Node.js, MongoDB, Express",
            },
            {
              icon: "❤️",
              title: "S.M.A.R.T Blood Monitoring",
              description:
                "Real-time alerting system to notify donors during low blood supply. Used backend triggers, cloud messaging, and monitoring mechanisms resembling DevOps incident response patterns.",
              tech: "Tech Stack: React, Node.js, MongoDB, Firebase",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="col d-flex align-items-stretch"
              data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
              data-aos-delay={index * 150}
            >
              <div
                className="card text-light border-0 rounded-4 w-100"
                style={{
                  backgroundColor: "rgba(0, 32, 25, 0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "1rem",
                  boxShadow: "0 0 15px rgba(0,255,170,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title d-flex align-items-center gap-2">
                    <span style={{ fontSize: "1.5rem" }}>{project.icon}</span>
                    {project.title}
                  </h5>
                  <p className="card-text mt-2">{project.description}</p>
                  <p className="text-secondary small mt-3 fst-italic">
                    {project.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="container my-5 pt-5 text-center border-top"
        data-aos="fade-up"
      >
        <h2
          className="mb-3"
          style={{ fontSize: "1.75rem", fontWeight: "500" }}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Resume
        </h2>
        <p
          className="text-light mb-4 mx-auto"
          style={{
            fontSize: "1.05rem",
            opacity: 0.95,
            maxWidth: "600px",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From full-stack beginnings to DevOps and cloud — it’s all in there.
          The resume speaks quietly, but clearly.
        </p>
        <a
          href="/NiveditaGanesh_2025.pdf"
          download
          className="btn fw-semibold rounded-pill d-inline-flex align-items-center gap-2 px-4 py-2 shadow"
          style={{
            fontSize: "1.1rem",
            backgroundColor: "#00ffaa",
            color: "#002019",
            border: "none",
            boxShadow: "0 0 12px rgba(0, 255, 170, 0.6)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#002019"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.103.897 2 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
          </svg>
          Download Resume
        </a>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="container-fluid bg-dark text-light py-5 mt-5 border-top"
        data-aos="fade-up"
        style={{ fontSize: "0.85rem" }}
      >
        <div className="container text-center">
          <h4 className="mb-3" style={{ fontSize: "1.25rem" }}>
            Let’s get in touch
          </h4>
          <p
            className="mb-4 mx-auto"
            style={{ fontSize: "0.9rem", color: "#ccc", maxWidth: "600px" }}
          >
            Whether you're building something in the cloud, wrangling
            infrastructure, or just feeling a bit curious — I’d love to hear
            from you.
          </p>

          <div className="my-3">
            <a
              href="mailto:nivedita.ganesh.94@gmail.com"
              className="d-block text-decoration-none fw-semibold mb-2"
              style={{
                fontSize: "0.95rem",
                color: "#00ffaa",
                wordBreak: "break-word",
              }}
            >
              📩 nivedita.ganesh.94@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/niveditaganesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-decoration-none fw-semibold"
              style={{
                fontSize: "0.95rem",
                color: "#00ffaa",
                wordBreak: "break-word",
              }}
            >
              💼 linkedin.com/in/niveditaganesh
            </a>
          </div>

          <p className="mt-4 small" style={{ color: "#aaa" }}>
            Built with 💻, ☁️, and a sprinkle of CSS magic.
          </p>
          <p className="small" style={{ color: "#aaa" }}>
            © {new Date().getFullYear()} Nivedita Ganesh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
