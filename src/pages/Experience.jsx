import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Cybersecurity Software Architect',
      company: 'NDSU',
      period: '2022 - Present',
      description: 'Leading development of innovative web applications and mentoring junior developers.',
      skills: ['React', 'TypeScript', 'Node.js', 'AWS']
    },
    {
      title: 'Graduate Research Assistant',
      company: 'NDSU',
      period: '2021 - 2022',
      description: 'Built scalable web applications from scratch and collaborated with cross-functional teams.',
      skills: ['JavaScript', 'Python', 'PostgreSQL', 'Docker']
    },
    {
      title: 'IT Intern',
      company: 'Network Center, Inc.',
      period: '2020 - 2022',
      description: 'Built scalable web applications from scratch and collaborated with cross-functional teams.',
      skills: ['JavaScript', 'Python', 'PostgreSQL', 'Docker']
    }
  ]

  return (
    <div className="experience-page">
      <div className="experience-container">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">My professional journey and expertise</p>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h2 className="experience-title">{exp.title}</h2>
                  <span className="experience-company">{exp.company}</span>
                </div>
                <span className="experience-period">{exp.period}</span>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience

