import { useMemo } from 'react'
import Hero from './components/Hero'
import ParallaxSection from './components/ParallaxSection'
import InfoCard from './components/InfoCard'
import Navbar from './components/Navbar'
import ProjectGallery from './components/ProjectGallery'

function App() {
  const contact = useMemo(() => ({
    location: 'Noida, Uttar Pradesh, India',
    phone: '8700650140',
    email: 'sheekhamahapatro.sm@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sheekhamahapatro-72a7191b5',
    github: 'https://github.com/Sheekhamahapatro',
  }), [])

  const skills = useMemo(() => ([
    'Figma', 'Angular', 'AngularJS', 'React.js', 'React Hooks', 'Tailwind CSS', 'JavaScript', 'Python', 'REST APIs', 'SQL'
  ]), [])

  const certifications = useMemo(() => ([
    'Meta Front-End Developer',
    'Programming with JavaScript',
    'Advanced React',
    'Build Dynamic User Interfaces (UI) for Websites',
    'HTML and CSS in depth',
    'React Basics'
  ]), [])

  const experiences = useMemo(() => ([
    {
      role: 'Freelance Full-Stack Developer',
      org: 'Freelance',
      period: 'Aug 2024 - Present',
      points: [
        'Built and deployed 3+ sites including a food-sharing platform and corporate websites using React.js, Python, HTML/CSS, and JavaScript.',
        'Translated Figma designs into responsive, pixel-perfect UI with Tailwind CSS, cutting delivery time by 30%.',
        'Integrated Google Maps, Auth0, and SEO enhancements—improving UX and visibility by 35%.',
        'Created Python automation tools reducing repetitive tasks by 40% for clients.',
        'Managed deployments via GitHub Pages, Netlify & cPanel for smooth releases.'
      ]
    },
    {
      role: 'Full-stack Engineer (Freelance)',
      org: 'KDD Educations',
      period: 'Jan 2025 - Present',
      points: [
        'Owning end-to-end product development using Angular (frontend) and Java Spring Boot with PostgreSQL (backend).',
        'Delivered scalable, user-friendly modules and optimized performance across the stack.'
      ]
    },
    {
      role: 'Web Development Intern',
      org: 'Orionix Systems Private Limited',
      period: 'Jan 2024 - Jul 2024',
      points: [
        'Contributed to real-time production projects and backend development using Python, improving data processing efficiency by 20%.',
        'Developed 15+ fully responsive web pages using HTML, CSS, JavaScript, and jQuery, reducing load time by 40%.',
        'Collaborated with UI/UX to enhance visual appeal and UX by 30%; ensured cross-browser and mobile consistency.'
      ]
    }
  ]), [])

  const education = useMemo(() => ([
    'MCA, Computer Science — Lovely Professional University (2022 - 2024)',
    'Bachelors, Computer and Information Sciences — Lovely Professional University (2019 - 2022)',
    'Senior — Sri Chaitanya College of Education (2016 - 2018)',
    'Secondary — Arwachin Bharti Bhawan Sr. Sec. School (2015)'
  ]), [])

  return (
    <div className="min-h-screen antialiased text-slate-900 bg-gradient-to-b from-white to-indigo-50/30">
      <Navbar />
      <Hero />

      <ParallaxSection id="about" title="Summary" subtitle="A quick snapshot of my focus and strengths.">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="About Me"
            items={[
              'Passionate Web Developer with expertise in JavaScript, React Hooks, and Tailwind CSS.',
              'Certified in Front-End Development by Meta; I love crafting seamless experiences.',
              'Open to opportunities and freelance engagements.'
            ]}
          />
          <InfoCard title="Top Skills" items={skills} />
          <InfoCard title="Certifications" items={certifications} />
        </div>
      </ParallaxSection>

      <ParallaxSection id="projects" title="Projects" subtitle="A few highlights from recent work.">
        <ProjectGallery />
      </ParallaxSection>

      <ParallaxSection id="experience" title="Experience" subtitle="Real-world work across companies and freelance.">
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200/60 shadow-sm p-6 transition-transform hover:-translate-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{exp.role} · <span className="text-indigo-700">{exp.org}</span></h3>
                <span className="text-sm text-slate-600">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc ml-5 space-y-2 text-slate-700">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title="Education" items={education} />
        </div>
      </ParallaxSection>

      <ParallaxSection id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard
            title="Reach Me"
            items={[
              `Location: ${contact.location}`,
              `Phone: ${contact.phone}`,
              `Email: ${contact.email}`,
              `LinkedIn: ${contact.linkedin}`,
              `GitHub: ${contact.github}`,
            ]}
          />
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200/60 shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Let’s connect</h3>
            <form className="grid gap-4">
              <input type="text" placeholder="Your name" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="email" placeholder="Your email" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea rows="4" placeholder="Message" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="button" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-5 py-2.5 font-semibold shadow-sm hover:bg-indigo-700 transition">
                Send
              </button>
            </form>
          </div>
        </div>
      </ParallaxSection>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 text-sm text-slate-600 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Sheekha Mahapatro. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-700">LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-indigo-700">GitHub</a>
            <a href="mailto:sheekhamahapatro.sm@gmail.com" className="hover:text-indigo-700">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
