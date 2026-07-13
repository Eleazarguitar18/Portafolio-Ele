import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../../data/projects";

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${({ theme }: any) => theme.spacing.lg} 0;

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    padding: ${({ theme }: any) => theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${({ theme }: any) => theme.spacing.xl} * 1.5);
  color: ${({ theme }: any) => theme.colors.light};
  text-shadow: ${({ theme }: any) => theme.colors.glow.text};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -${({ theme }: any) => theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${({ theme }: any) => theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    margin-bottom: calc(${({ theme }: any) => theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }: any) => theme.spacing.lg};
  width: 100%;
  margin-top: ${({ theme }: any) => theme.spacing.lg};

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    gap: ${({ theme }: any) => theme.spacing.xl};
    margin-top: ${({ theme }: any) => theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }: any) => theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${({ theme }: any) => theme.colors.textLight};
  transition: all ${({ theme }: any) => theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }: any) => theme.colors.glow.box};
  }
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
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
      ${({ theme }: any) => theme.colors.glass.card},
      transparent
    );
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ProjectContent = styled.div`
  padding: ${({ theme }: any) => theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    padding: ${({ theme }: any) => theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${({ theme }: any) => theme.spacing.sm};
  color: ${({ theme }: any) => theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }: any) => theme.colors.textLight};
  margin-bottom: ${({ theme }: any) => theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }: any) => theme.spacing.xs};
  margin-bottom: ${({ theme }: any) => theme.spacing.md};

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    gap: ${({ theme }: any) => theme.spacing.sm};
    margin-bottom: ${({ theme }: any) => theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${({ theme }: any) => theme.colors.glass.card};
  color: ${({ theme }: any) => theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${({ theme }: any) => theme.transitions.default};

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${({ theme }: any) => theme.colors.gradient.accent};
    color: ${({ theme }: any) => theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: ${({ theme }: any) => theme.colors.glow.box};
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }: any) => theme.spacing.md};
  margin-top: auto;
  padding-top: ${({ theme }: any) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  a {
    color: ${({ theme }: any) => theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${({ theme }: any) => theme.transitions.default};
    padding: ${({ theme }: any) => theme.spacing.xs};
    border-radius: 4px;

    &:hover {
      color: ${({ theme }: any) => theme.colors.light};
      background: ${({ theme }: any) => theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

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
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <ProjectImageWrapper>
                  <StyledImg
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    onError={(e) => {
                      e.currentTarget.src = "/images/project-0.png";
                    }}
                  />
                </ProjectImageWrapper>
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
