import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${({ theme }: any) => theme.colors.textLight};
  padding: ${({ theme }: any) => theme.spacing.lg} ${({ theme }: any) => theme.spacing.md};

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    padding: ${({ theme }: any) => theme.spacing.xl} ${({ theme }: any) => theme.spacing.lg};
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${({ theme }: any) => theme.spacing.xl};
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
    background-color: ${({ theme }: any) => theme.colors.light};
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ theme }: any) => theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  margin-top: ${({ theme }: any) => theme.spacing.xl};

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }: any) => theme.spacing.xl};
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }: any) => theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${({ theme }: any) => theme.spacing.lg};
  transition: all ${({ theme }: any) => theme.transitions.default};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }: any) => theme.colors.glow.box};
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: ${({ theme }: any) => theme.spacing.xl};
  color: ${({ theme }: any) => theme.colors.light};
  display: flex;
  align-items: center;
  gap: ${({ theme }: any) => theme.spacing.sm};
  font-weight: 600;
  position: relative;
  padding-bottom: ${({ theme }: any) => theme.spacing.md};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }: any) => theme.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: clamp(1.75rem, 3vw, 2rem);
    color: ${({ theme }: any) => theme.colors.accent};
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }: any) => theme.spacing.md};
  flex: 1;
  width: 100%;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }: any) => theme.spacing.sm};
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  padding: ${({ theme }: any) => theme.spacing.md};
  border-radius: 12px;
  transition: all ${({ theme }: any) => theme.transitions.default};
  background: ${({ theme }: any) => theme.colors.glass.card};

  svg {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    color: ${({ theme }: any) => theme.colors.accent};
    transition: all ${({ theme }: any) => theme.transitions.default};
  }

  &:hover {
    background: ${({ theme }: any) => theme.colors.gradient.glass};
    transform: translateX(5px);
    box-shadow: ${({ theme }: any) => theme.colors.glow.box};

    svg {
      transform: scale(1.1) rotate(5deg);
      color: ${({ theme }: any) => theme.colors.light};
    }
  }
`;

const Skills = () => {
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
    <SkillsSection id="skills" role="region" aria-label="Skills and Expertise">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        Habilidades y experiencia
      </SectionTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SkillsContainer role="list">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`category-title-${index}`}
            >
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </CategoryTitle>
              <SkillsList role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    variants={itemVariants}
                    role="listitem"
                  >
                    <span aria-hidden="true">{skill.icon}</span>
                    <span>{skill.name}</span>
                    <span className="sr-only">{`${skill.name} - ${category.title} skill`}</span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;
