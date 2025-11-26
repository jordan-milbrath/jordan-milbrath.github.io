import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Cybersecurity Software Architect',
      company: 'NDSU',
      period: '2022 - Present',
      description: 'Transform ambiguous project requirements into well-defined, modular architecture by proactively clarifying objectives, identifying gaps, and collaborating with stakeholders to ensure functional implementation.',
      skills: ['C#', '.NET', 'Python', 'Git', 'MAUI', 'ASP.NET Core']
    },
    {
      title: 'Graduate Research Assistant',
      company: 'NDSU',
      period: '2021 - 2022',
      description: 'Work with teams to complete artificial intelligence and network security projects, primarily in C# (.NET) and Python using Git. Conduct software testing and write research papers analyzing software and results.',
      skills: ['C#', '.NET', 'Python', 'Git']
    },
    {
      title: 'IT Intern',
      company: 'Network Center, Inc.',
      period: '2020 - 2022',
      description: 'Led interns, supported web development, managed client communications and logistics, automated tasks with PowerShell, and provided technical troubleshooting across software, hardware, and networking.',
      skills: ['PowerShell', 'Windows', 'Active Directory', 'Self-Sufficiency', 'Customer Service']
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

