import styled from '@emotion/styled';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const NavContainer = styled(motion.nav)`
  position: fixed;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  background: ${({ theme }: any) => theme.colors.glass.card};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 8px 6px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};

  @media print { display: none; }

  @media (max-width: 640px) {
    right: 6px;
    padding: 6px 4px;
    gap: 5px;
    opacity: 0.6;
    &:hover { opacity: 1; }
  }

  @media (max-height: 500px) {
    gap: 4px;
    padding: 4px;
  }
`;

/* Use data-active="true"/"false" attribute to avoid prop-to-DOM issues with Framer Motion */
const NavDot = styled(motion.button)`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  cursor: pointer;
  position: relative;
  opacity: 0.6;
  transition: all 0.25s ease;
  flex-shrink: 0;

  /* Active state via data attribute — no prop forwarding needed */
  &[data-active="true"] {
    width: 10px;
    height: 10px;
    background: ${({ theme }: any) => theme.colors.accent};
    border-color: ${({ theme }: any) => theme.colors.accent};
    opacity: 1;
  }

  @media (max-width: 640px) {
    width: 6px;
    height: 6px;

    &[data-active="true"] {
      width: 8px;
      height: 8px;
    }
  }

  &:hover {
    opacity: 1;
    transform: scale(1.3);
    border-color: ${({ theme }: any) => theme.colors.accent};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }: any) => theme.colors.accent}60;
  }

  /* Tooltip */
  &::before {
    content: attr(data-tooltip);
    position: absolute;
    right: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }: any) => theme.colors.glass.card};
    border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    color: ${({ theme }: any) => theme.colors.text};
    font-weight: 500;

    @media (max-width: 640px) {
      display: none;
    }
  }

  &:hover::before {
    opacity: 1;
  }

  @media (hover: none) {
    &:active { transform: scale(0.9); }
  }
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    ${({ theme }: any) => theme.colors.accent},
    ${({ theme }: any) => theme.colors.light}
  );
  transform-origin: 0%;
  z-index: 1001;

  @media print { display: none; }
`;

const sections = [
  { id: 'hero', name: 'Inicio' },
  { id: 'projects', name: 'Proyectos' },
  { id: 'skills', name: 'Habilidades' },
  { id: 'contact', name: 'Contacto' },
];

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ProgressBar style={{ scaleX }} />
      <NavContainer
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        role="navigation"
        aria-label="Section navigation"
      >
        {sections.map(({ id, name }) => (
          <NavDot
            key={id}
            data-active={activeSection === id ? 'true' : 'false'}
            data-tooltip={name}
            onClick={() => scrollTo(id)}
            aria-label={`Ir a ${name}`}
            aria-current={activeSection === id ? 'true' : undefined}
            whileTap={{ scale: 0.85 }}
          />
        ))}
      </NavContainer>
    </>
  );
};
