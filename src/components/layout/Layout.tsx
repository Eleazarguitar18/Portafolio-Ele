import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { FloatingNav } from "../navigation/FloatingNav";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div`
  @media print {
    background: white !important;
    color: black !important;

    * {
      color: black !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }

    section {
      min-height: auto !important;
      padding: 2rem 0 !important;
      page-break-inside: avoid;
    }

    a[href]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
    }
  }

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 70% 30%,
      ${({ theme }: any) => theme.colors.accent}15 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const Header = styled.header`
  background: ${({ theme }: any) => theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${({ theme }: any) => theme.spacing.md} 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media print {
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(
      to bottom,
      ${({ theme }: any) => theme.colors.glass.background},
      transparent
    );
  }
`;

const Nav = styled.nav`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${({ theme }: any) => theme.spacing.md};
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
`;

const Logo = styled(motion.div)`
  color: ${({ theme }: any) => theme.colors.light};
  font-family: ${({ theme }: any) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }: any) => theme.spacing.lg};
  align-items: center;

  a {
    color: ${({ theme }: any) => theme.colors.textLight};
    transition: all ${({ theme }: any) => theme.transitions.default};
    font-weight: 500;
    padding: ${({ theme }: any) => theme.spacing.xs} ${({ theme }: any) => theme.spacing.sm};
    border-radius: 4px;

    &:hover {
      color: ${({ theme }: any) => theme.colors.light};
      background-color: rgba(102, 163, 255, 0.1);
    }
  }

  @media (max-width: ${({ theme }: any) => theme.breakpoints.sm}) {
    gap: ${({ theme }: any) => theme.spacing.md};
  }
`;

const ThemeToggleBtn = styled.button<{ $mode: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background: ${({ theme }: any) => theme.colors.glass.card};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  position: relative;
  padding: 0 6px;
  margin-left: ${({ theme }: any) => theme.spacing.md};
  cursor: pointer;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);

  .toggle-circle {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ theme }: any) => theme.colors.accent};
    top: 2px;
    left: ${({ $mode }) => $mode === 'dark' ? '2px' : '32px'};
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 14px;
    z-index: 1;
    color: ${({ theme }: any) => theme.colors.text};
    transition: color 0.3s ease;
  }
`;

const Main = styled.main`
  flex: 1;
  margin-top: 4.5rem;
  width: 100%;
  overflow-x: hidden;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${({ theme }: any) => theme.colors.accent};
  color: ${({ theme }: any) => theme.colors.textDark};
  padding: ${({ theme }: any) => theme.spacing.sm};
  z-index: 9999;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

const Footer = styled.footer`
  background: ${({ theme }: any) => theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${({ theme }: any) => theme.colors.textLight};
  padding: ${({ theme }: any) => theme.spacing.lg} 0;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(
      to top,
      ${({ theme }: any) => theme.colors.glass.background},
      transparent
    );
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  const { mode, toggleTheme } = useThemeContext();
  useKeyboardNavigation();

  useEffect(() => {
    // Add keyboard navigation instructions to console
    console.info(
      "Keyboard Navigation:\n",
      "- Arrow Up/Down or PageUp/PageDown: Navigate between sections\n",
      "- Home: Go to top\n",
      "- End: Go to bottom",
    );
  }, []);

  return (
    <LayoutWrapper>
      <SkipLink href="#main-content">Skip to main content</SkipLink>

      <Header role="banner">
        <Nav role="navigation" aria-label="Main navigation">
          <div className="container">
            <Logo
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              role="heading"
              aria-level={1}
            >
              Portfolio
            </Logo>
            <NavLinks role="list">
              <a href="#about" role="listitem" aria-label="About section">
                Acerca de
              </a>
              <a href="#projects" role="listitem" aria-label="Projects section">
                Proyectos
              </a>
              <a href="#skills" role="listitem" aria-label="Skills section">
                Habilidades
              </a>
              <a href="#contact" role="listitem" aria-label="Contact section">
                Contacto
              </a>
              <ThemeToggleBtn $mode={mode} onClick={toggleTheme} aria-label="Toggle Theme">
                <div className="toggle-circle" />
                <FaMoon />
                <FaSun />
              </ThemeToggleBtn>
            </NavLinks>
          </div>
        </Nav>
      </Header>
      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      <FloatingNav />
      <Footer role="contentinfo">
        <div className="container">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </Footer>
    </LayoutWrapper>
  );
};
