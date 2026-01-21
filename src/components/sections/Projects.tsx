import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 180px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
      to top,
      ${theme.colors.glass.card},
      transparent
    );
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const projects = [
  {
    id: 1,
    title: "SIGHOV2",
    description:
      "Sistema institucional desarrollado para la gestión de módulos de planificación y talento humano. Implementado con Laravel y Livewire, incluye autenticación, gestión de usuarios, reportes y dashboards interactivos. Me encargué de backend, frontend y la integración con PostgreSQL, asegurando que el sistema fuera estable, seguro y fácil de mantener.",
    image: "https://via.placeholder.com/400x200",
    techStack: ["Laravel", "Livewire", "PostgreSQL"],
    githubUrl: "https://github.com/Eleazarguitar18/SIGHOV2",
    liveUrl: "https://sigho.ssulapaz.org/login",
  },
  {
    id: 2,
    title: "React Task App",
    description:
      "Aplicación SPA de tareas construida en React y Vite, con una interfaz intuitiva y responsive. Permite crear, editar y eliminar tareas, organizarlas por categorías y realizar seguimiento del progreso. Este proyecto me permitió reforzar mis habilidades en React, manejo de estados y consumo de APIs, con enfoque en experiencia de usuario y código limpio.",
    image: "https://via.placeholder.com/400x200",
    techStack: ["React", "Vite"],
    githubUrl: "https://github.com/Eleazarguitar18/EleazarReact",
    liveUrl: "https://eleazarguitar18.github.io/EleazarReact/",
  },
  {
    id: 3,
    title: "Proyecto Inf 133",
    description:
      "Proyecto fullstack desarrollado con Node.js y React, desplegado en Render. Incluye backend con APIs REST para gestión de datos, frontend dinámico y responsive, y conexión con bases de datos. Este proyecto destaca por la implementación de lógica compleja en el backend y la creación de componentes reutilizables en React, demostrando experiencia full-stack.",
    image: "https://via.placeholder.com/400x200",
    techStack: ["Node.js", "React"],
    githubUrl: "https://github.com/Eleazarguitar18/Proyecto-Inf-133",
    liveUrl: "https://proyecto-inf-133.onrender.com/",
  },
  {
    id: 4,
    title: "Front SSU",
    description:
      "Frontend institucional desarrollado en React para interactuar con sistemas internos. Diseñado para ser escalable y modular, implementando componentes reutilizables, navegación intuitiva y responsive. Este proyecto refleja mi capacidad de trabajar en entornos institucionales, optimizando la experiencia de usuario y manteniendo código limpio y mantenible.",
    image: "https://via.placeholder.com/400x200",
    techStack: ["React"],
    githubUrl: "https://github.com/Eleazarguitar18/Front-SSU",
    liveUrl: "https://frontssu.onrender.com/",
  },
  {
    id: 5,
    title: "No Violencia",
    description:
      "Proyecto universitario orientado a la concientización sobre la violencia. Diseñé y desarrollé completamente el backend, implementando la lógica de datos y la API para alimentar la aplicación web. El frontend está basado en HTML, CSS y JavaScript, mientras que el backend incluye estructuras de datos bien definidas y manejo eficiente de la información. Este proyecto me permitió demostrar habilidades en arquitectura de sistemas y desarrollo full-stack, enfocándome en la funcionalidad y escalabilidad.",
    image: "https://via.placeholder.com/400x200",
    techStack: ["Node.js", "Express", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Eleazarguitar18/NoViolencia",
    liveUrl: "https://noviolencia.github.io/",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  console.log(projects.length); // debe imprimir 5

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Proyectos
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <ProjectImage
                  imageUrl={project.image}
                  role="img"
                  aria-label={`Screenshot of ${project.title}`}
                />
                <ProjectContent>
                  <ProjectTitle id={`project-title-${project.id}`}>
                    {project.title}
                  </ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack
                    role="list"
                    aria-label={`Technologies used in ${project.title}`}
                  >
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">
                        {tech}
                      </TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub aria-hidden="true" />
                      <span className="sr-only">GitHub repository</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                      <span className="sr-only">Live site</span>
                    </a>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
