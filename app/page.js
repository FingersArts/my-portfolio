"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaPython, FaFigma, FaWhatsapp, FaInstagram, FaDatabase, FaFileExcel, FaMicrosoft, FaGoogle } from 'react-icons/fa';


export default function Home() {
  // --- DATA UNTUK KUSTOMISASI ---
  const myData = {
    name: "Aziz Mujahiddin Nugraha",
    title: "Data Analyst & UI/UX Designer",
    description: "Saya mahasiswa semester akhir yang bersemangat meniti karier sebagai UI/UX Designer dan Data Analyst. Saya menguasai desain antarmuka pengguna yang intuitif dan analisis data mendalam, mengikuti tren teknologi terkini untuk menciptakan solusi inovatif di dunia industri.",
    about: "Saya adalah mahasiswa Universitas Budi Luhur yang fokus pada pengembangan antarmuka pengguna yang responsif dan analisis data untuk mendukung pengambilan keputusan. Dengan keahlian di bidang algoritma, teknologi modern, dan manajerial, saya berkomitmen untuk memberikan dampak positif melalui desain dan data.",
    profileImage: "/profile.jpg",
    email: "azizmn03@gmail.com",
    socials: {
      github: "https://github.com/FingersArts",
      linkedin: "https://www.linkedin.com/in/azizmujahiddin/",
      instagram: "https://www.instagram.com/mujahiddin.aziz/",
      whatsapp: "https://wa.me/6281385367079"
    },
    projects: [
      {
        title: "NUSAKA (Nusantara Swakarya) ",
        description: "Gemastik 2023 UX Design Competition - Aplikasi untuk mendaftarkan dan mengamankan hak cipta karya seni seorang seniman dengan Blockchain.",
        image: "nusaka.png",
        link: "https://www.figma.com/design/VoGV6QLP3IYd0fpHt32kh0/Nusaka?node-id=0-1&t=CzdrEj8B55dekGoC-1"
      },
      {
        title: "OTAK ATIK",
        description: "Dicoding Capstone Project as UI/UX Designer and React Front-End Developer - Website untuk belajar dan mengajar secara online dengan berbagai macam materi.",
        image: "otakatik.png",
        link: "https://github.com/ryudhis/Otak-Atik",
        liveDemo: "https://otak-atik.vercel.app/"
      },
      {
        title: "Web Sentiment Analysis",
        description: "Intern Project - Dashboard interaktif untuk analisis sentimen suatu topik menggunakan Python dengan metode Multinomial Logistic Regression.",
        image: "sentimen.png",
        link: "https://github.com/FingersArts/Sentiment_App",
        liveDemo: "https://sentimentapp-kkp.streamlit.app/"
      },
      {
        title: "Naive Bayes vs Multinomial Logistic Regression for Sentiment Analysis",
        description: "Final Project - Dashboard interaktif untuk analisis sentimen membandingkan metode Naive Bayes dan Multinomial Logistic Regression.",
        image: "sentimen.png",
        link: "https://github.com/FingersArts/Skripsi_App",
        liveDemo: "https://sentimentapp-kkp.streamlit.app/"
      },
      
    ],
    certificates: [
      {
        title: "DASAR PEMROGRAMAN UNTUK PENGEMBANG SOFTWARE",
        issuer: "Dicoding Indonesia",
        date: "Feb 2024",
        image: "1.png",
        link: "https://www.dicoding.com/certificates/NVP776E8GPR0"
      },
      {
        title: "Belajar Dasar Git dengan GitHub",
        issuer: "Dicoding Indonesia",
        date: "Feb 2024",
        image: "2.png",
        link: "https://www.dicoding.com/certificates/98XW2QDJ4PM3"
      },
      {
        title: "Belajar Membuat Aplikasi Web dengan React",
        issuer: "Dicoding Indonesia",
        date: "Maret 2024",
        image: "3.png",
        link: "https://www.dicoding.com/certificates/81P2VE1WYPOY"
      },
      {
        title: "MENJADI REACT WEB DEVELOPER EXPERT",
        issuer: "Dicoding Indonesia",
        date: "Mei 2024",
        image: "4.png",
        link: "https://www.dicoding.com/certificates/N9ZOM5WG8PG5"
      },
      {
        title: "FUNDAMENTAL APLIKASI WEB DENGAN REACT",
        issuer: "Dicoding Indonesia",
        date: "Mei 2024",
        image: "5.png",
        link: "https://www.dicoding.com/certificates/2VX3O8LD4ZYQ"
      },
      {
        title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
        issuer: "Dicoding Indonesia",
        date: "Mei 2024",
        image: "6.png",
        link: "https://www.dicoding.com/certificates/NVP7Q4YMGZR0"
      },
      
    ],
    skills: [
      { name: "Python", icon: <FaPython size={48} /> },
      { name: "Data", icon: <FaDatabase size={48} /> },
      { name: "Git", icon: <FaGitAlt size={48} /> },
      { name: "React", icon: <FaReact size={48} /> },
      { name: "Figma", icon: <FaFigma size={48} /> }
    ]
  };

  // --- SCROLL ANIMATION ---
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    about: false,
    projects: false,
    certificates: false,
    skills: false,
    contact: false,
  });

  // --- State for "See More" functionality ---
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [visibleCertificates, setVisibleCertificates] = useState(3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleSeeMoreProjects = () => {
    setVisibleProjects(myData.projects.length);
  };

  const handleSeeMoreCertificates = () => {
    setVisibleCertificates(myData.certificates.length);
  };

  return (
    <main className="p-4 sm:p-8 bg-[var(--background)] min-h-screen">
      {/* Header Section */}
      <header className="sticky top-0 bg-[var(--background)]/90 backdrop-blur-sm z-20 py-4">
        <nav className="flex justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 gap-6 sm:gap-10">
          <a
            href="#hero"
            className="text-[var(--foreground)] hover:text-[var(--primary)] font-semibold text-lg transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-[var(--foreground)] hover:text-[var(--primary)] font-semibold text-lg transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-[var(--foreground)] hover:text-[var(--primary)] font-semibold text-lg transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#certificates"
            className="text-[var(--foreground)] hover:text-[var(--primary)] font-semibold text-lg transition-colors duration-300"
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="text-[var(--foreground)] hover:text-[var(--primary)] font-semibold text-lg transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className={`flex flex-col sm:flex-row items-center justify-center my-16 ${visibleSections.hero ? 'visible' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visibleSections.hero ? 1 : 0, y: visibleSections.hero ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-shrink-0 mb-8 sm:mb-0 sm:mr-12 mt-10">
          <Image
            src={myData.profileImage}
            alt="Foto Profil"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-xl aspect-square border-4 border-[var(--primary)]"
            style={{ aspectRatio: '1 / 1' }}
          />
        </div>
        
        <div className="text-center sm:text-left mt-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)]">{myData.name}</h1>
          <p className="text-2xl text-[var(--primary)] mt-3 font-medium">{myData.title}</p>
          <p className="text-xl text-[var(--foreground)] mt-5 max-w-xl">{myData.description}</p>
          <br></br>
          <div className="flex items-center gap-8">
            <a href={myData.socials.github} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-300">
              <FaGithub size={32} />
            </a>
            <a href={myData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-300">
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className={`my-20 ${visibleSections.skills ? 'visible' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visibleSections.skills ? 1 : 0, y: visibleSections.skills ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">Keahlian Saya</h2>
        <div className="flex justify-center items-center flex-wrap gap-8 px-4">
          {myData.skills.map((skill, index) => (
            <div key={index} className="card flex flex-col items-center p-6 rounded-xl">
              <div className="text-[var(--primary)] transform hover:scale-110 transition-transform duration-300">{skill.icon}</div>
              <p className="mt-3 text-[var(--foreground)] font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className={`my-20 ${visibleSections.projects ? 'visible' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visibleSections.projects ? 1 : 0, y: visibleSections.projects ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">Projek Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {myData.projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="card flex flex-col items-center p-6 rounded-xl overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full rounded-xl object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{project.title}</h3>
                <p className="text-[var(--foreground)] mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-semibold transition-colors duration-300"
                  >
                    Details →
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < myData.projects.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleSeeMoreProjects}
              className="bg-[var(--primary)] text-white py-2 px-4 rounded hover:bg-[var(--primary-hover)] transition-colors duration-300"
            >
              See More
            </button>
          </div>
        )}
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        id="certificates"
        className={`my-20 ${visibleSections.certificates ? 'visible' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visibleSections.certificates ? 1 : 0, y: visibleSections.certificates ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-8 text-center">Sertifikat Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {myData.certificates.slice(0, visibleCertificates).map((certificate, index) => (
            <div key={index} className="card flex flex-col p-6 rounded-xl overflow-hidden">
              <img src={certificate.image} alt={certificate.title} className="w-full h-full rounded-xl object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{certificate.title}</h3>
                <p className="text-[var(--foreground)] mb-1">Penerbit: {certificate.issuer}</p>
                <p className="text-[var(--foreground)] mb-4">Tanggal: {certificate.date}</p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-semibold transition-colors duration-300"
                >
                  Lihat Sertifikat →
                </a>
              </div>
            </div>
          ))}
        </div>
        {visibleCertificates < myData.certificates.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleSeeMoreCertificates}
              className="bg-[var(--primary)] text-white py-2 px-4 rounded hover:bg-[var(--primary-hover)] transition-colors duration-300"
            >
              See More
            </button>
          </div>
        )}
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className={`my-20 text-center ${visibleSections.contact ? 'visible' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visibleSections.contact ? 1 : 0, y: visibleSections.contact ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Hubungi Saya</h2>
        <p className="text-[var(--foreground)] mb-8 max-w-lg mx-auto">Saya terbuka untuk peluang kolaborasi, proyek, atau diskusi lebih lanjut. Hubungi saya untuk memulai!</p>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${myData.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--primary)] text-white font-bold py-3 px-8 rounded-full hover:bg-[var(--primary-hover)] transition-colors duration-300 inline-flex items-center shadow-lg"
        >
          <FaEnvelope className="mr-2" /> Kirim Email
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--foreground)]/20">
        <div className="flex justify-center items-center gap-8">
          <a href={myData.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-300">
            <FaWhatsapp size={32} />
          </a>
          <a href={myData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-300">
            <FaInstagram size={32} />
          </a>
        </div>
        <p className="text-center text-[var(--foreground)] mt-4 text-sm">© {new Date().getFullYear()} {myData.name}. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
