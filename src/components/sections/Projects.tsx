import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../../data/projects";

const Section = styled.section`
  padding: 4rem 1.25rem;
  @media (min-width: 768px) { padding: 5rem 2rem; }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${({ theme }: any) => theme.colors.light};
  text-shadow: ${({ theme }: any) => theme.colors.glow.text};
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: ${({ theme }: any) => theme.colors.accent};
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
`;

const Card = styled(motion.div)`
  background: ${({ theme }: any) => theme.colors.glass.card};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }: any) => theme.colors.glow.box};
  }
`;

const CardImg = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
  background: ${({ theme }: any) => theme.colors.secondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(to top, ${({ theme }: any) => theme.colors.glass.card}, transparent);
  }
`;

const CardBody = styled.div`
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }: any) => theme.colors.light};
`;

const CardDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }: any) => theme.colors.textLight};
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  background: ${({ theme }: any) => theme.colors.glass.background};
  color: ${({ theme }: any) => theme.colors.accent};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
`;

const CardLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }: any) => theme.colors.glass.border};

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    color: ${({ theme }: any) => theme.colors.accent};
    font-weight: 500;
    transition: color 0.2s;

    &:hover { color: ${({ theme }: any) => theme.colors.light}; }

    svg { font-size: 1rem; }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Projects = () => (
  <Section id="projects">
    <SectionTitle
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Proyectos
    </SectionTitle>
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <Grid>
        {projectsData.map((project) => (
          <Card key={project.id} variants={item}>
            <CardImg>
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => { e.currentTarget.src = "/images/project-0.png"; }}
              />
            </CardImg>
            <CardBody>
              <CardTitle>{project.title}</CardTitle>
              <CardDesc>{project.description}</CardDesc>
              <Tags>
                {project.techStack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
              </Tags>
              <CardLinks>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              </CardLinks>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </motion.div>
  </Section>
);

export default Projects;
