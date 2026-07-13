import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

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

  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`;

const CategoryCard = styled(motion.div)`
  background: ${({ theme }: any) => theme.colors.glass.card};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  border-radius: 16px;
  padding: 1.5rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }: any) => theme.colors.glow.box};
  }
`;

const CategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }: any) => theme.colors.light};
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }: any) => theme.colors.glass.border};

  svg { color: ${({ theme }: any) => theme.colors.accent}; font-size: 1.3rem; }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  border-radius: 10px;
  background: ${({ theme }: any) => theme.colors.glass.background};
  font-size: 0.875rem;
  color: ${({ theme }: any) => theme.colors.textLight};
  transition: all 0.2s ease;

  svg {
    color: ${({ theme }: any) => theme.colors.accent};
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  &:hover {
    background: ${({ theme }: any) => theme.colors.glass.card};
    color: ${({ theme }: any) => theme.colors.text};
    transform: translateX(3px);
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => (
  <Section id="skills">
    <SectionTitle
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Habilidades
    </SectionTitle>
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <Grid>
        {skillCategories.map((cat, i) => (
          <CategoryCard key={i} variants={item}>
            <CategoryTitle>
              {cat.icon} {cat.title}
            </CategoryTitle>
            <SkillGrid>
              {cat.skills.map((skill, j) => (
                <SkillItem key={j} whileHover={{ scale: 1.02 }}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </SkillItem>
              ))}
            </SkillGrid>
          </CategoryCard>
        ))}
      </Grid>
    </motion.div>
  </Section>
);

export default Skills;
