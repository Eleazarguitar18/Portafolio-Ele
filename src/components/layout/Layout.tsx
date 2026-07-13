import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { FloatingNav } from "../navigation/FloatingNav";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div`
  @media print {
    background: white !important;
    color: black !important;
    * { color: black !important; text-shadow: none !important; box-shadow: none !important; }
    section { min-height: auto !important; padding: 2rem 0 !important; page-break-inside: avoid; }
    a[href]:after { content: " (" attr(href) ")"; font-size: 0.8em; }
  }
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;
`;

const Header = styled.header`
  background: ${({ theme }: any) => theme.colors.glass.background};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }: any) => theme.colors.glass.border};

  @media print { display: none; }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0.85rem 1.25rem;

  @media (min-width: 768px) {
    padding: 0.85rem 2rem;
  }
`;

const Logo = styled(motion.a)`
  color: ${({ theme }: any) => theme.colors.light};
  font-family: ${({ theme }: any) => theme.fonts.heading};
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-decoration: none;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  /* Mobile menu */
  @media (max-width: 767px) {
    position: fixed;
    top: 57px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: ${({ theme }: any) => theme.colors.primary};
    border-bottom: 1px solid ${({ theme }: any) => theme.colors.glass.border};
    padding: ${({ $open }) => ($open ? "0.5rem 0 1rem" : "0")};
    max-height: ${({ $open }) => ($open ? "400px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.25rem;
    position: static;
    background: transparent;
    padding: 0;
    max-height: none;
    overflow: visible;
  }

  a {
    color: ${({ theme }: any) => theme.colors.textLight};
    transition: all 0.2s ease;
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.45rem 0.75rem;
    border-radius: 6px;
    white-space: nowrap;
    text-decoration: none;

    @media (max-width: 767px) {
      padding: 0.85rem 1.5rem;
      border-radius: 0;
      border-bottom: 1px solid ${({ theme }: any) => theme.colors.glass.border};
      font-size: 1rem;
    }

    &:hover {
      color: ${({ theme }: any) => theme.colors.light};
      background-color: ${({ theme }: any) => theme.colors.glass.card};
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

const ThemeToggleBtn = styled.button<{ $mode: 'dark' | 'light' }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 54px;
  height: 28px;
  border-radius: 14px;
  background: ${({ theme }: any) => theme.colors.glass.card};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  position: relative;
  padding: 0 5px;
  cursor: pointer;

  .toggle-circle {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${({ theme }: any) => theme.colors.accent};
    top: 2px;
    left: ${({ $mode }) => $mode === 'dark' ? '2px' : '28px'};
    transition: left 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 12px;
    z-index: 1;
    color: ${({ theme }: any) => theme.colors.text};
  }
`;

const HamburgerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }: any) => theme.colors.glass.card};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  color: ${({ theme }: any) => theme.colors.light};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  flex-shrink: 0;

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${({ theme }: any) => theme.colors.accent};
    color: #fff;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Main = styled.main`
  flex: 1;
  margin-top: 57px;
  width: 100%;
  overflow-x: hidden;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${({ theme }: any) => theme.colors.accent};
  color: ${({ theme }: any) => theme.colors.textDark};
  padding: 0.5rem;
  z-index: 9999;
  transition: top 0.2s;
  &:focus { top: 0; }
`;

const Footer = styled.footer`
  background: ${({ theme }: any) => theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${({ theme }: any) => theme.colors.textLight};
  padding: 1.5rem 1rem;
  text-align: center;
  border-top: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  font-size: 0.9rem;
`;

export const Layout = ({ children }: LayoutProps) => {
  const { mode, toggleTheme } = useThemeContext();
  const [menuOpen, setMenuOpen] = useState(false);
  useKeyboardNavigation();

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <LayoutWrapper>
      <SkipLink href="#main-content">Skip to main content</SkipLink>

      <Header role="banner">
        <NavContainer role="navigation" aria-label="Main navigation">
          <Logo
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </Logo>

          <NavLinks role="list" $open={menuOpen}>
            <a href="#hero" role="listitem" onClick={closeMenu}>Acerca de</a>
            <a href="#projects" role="listitem" onClick={closeMenu}>Proyectos</a>
            <a href="#skills" role="listitem" onClick={closeMenu}>Habilidades</a>
            <a href="#contact" role="listitem" onClick={closeMenu}>Contacto</a>
          </NavLinks>

          <NavActions>
            <ThemeToggleBtn $mode={mode} onClick={toggleTheme} aria-label="Toggle Theme">
              <div className="toggle-circle" />
              <FaMoon />
              <FaSun />
            </ThemeToggleBtn>
            <HamburgerBtn
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen
                ? <FaTimes style={{ display: 'block', width: 20, height: 20 }} />
                : <FaBars style={{ display: 'block', width: 20, height: 20 }} />
              }
            </HamburgerBtn>
          </NavActions>
        </NavContainer>
      </Header>

      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      <FloatingNav />
      <Footer role="contentinfo">
        <p>© {new Date().getFullYear()} Eleazar Jhonny Cruz Mamani. All rights reserved.</p>
      </Footer>
    </LayoutWrapper>
  );
};
