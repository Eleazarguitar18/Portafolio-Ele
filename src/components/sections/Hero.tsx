import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { lazy, Suspense } from "react";
import { aboutData } from "../../data/about";

const FaGithub = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaGithub })));
const FaLinkedin = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaLinkedin })));
const FaEnvelope = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaEnvelope })));

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  min-height: calc(100vh - 57px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.25rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
  background: ${({ theme }: any) => theme.colors.glass.background};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 3rem;
    gap: 3rem;
  }
`;

const TextCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 6vw, 3.8rem);
  color: ${({ theme }: any) => theme.colors.light};
  text-shadow: ${({ theme }: any) => theme.colors.glow.text};
  line-height: 1.15;
  margin-bottom: 0.75rem;
  animation: ${fadeUp} 0.5s ease forwards;
  word-break: break-word;
`;

const Subtitle = styled.h2`
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  color: ${({ theme }: any) => theme.colors.textLight};
  font-weight: 500;
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${fadeUp} 0.5s ease 0.15s forwards;
`;

const Description = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: ${({ theme }: any) => theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeUp} 0.5s ease 0.3s forwards;
  max-width: 560px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  opacity: 0;
  animation: ${fadeUp} 0.5s ease 0.45s forwards;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    font-size: 1.35rem;
    color: ${({ theme }: any) => theme.colors.textLight};
    background: ${({ theme }: any) => theme.colors.glass.card};
    border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
    transition: all 0.25s ease;

    &:hover {
      color: ${({ theme }: any) => theme.colors.light};
      transform: translateY(-3px);
      box-shadow: ${({ theme }: any) => theme.colors.glow.box};
    }
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
  animation: ${fadeUp} 0.5s ease forwards;

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
  }

  @media (min-width: 1024px) {
    width: 320px;
    height: 320px;
  }
`;

export const Hero = () => (
  <HeroSection id="hero" aria-label="Introduction">
    <Inner>
      {/* Photo first on mobile, right side on desktop */}
      <ProfileImage
        src={aboutData.profileImage}
        alt={aboutData.name}
      />
      <TextCol>
        <Title>{aboutData.greeting}<br />{aboutData.name}<br />{aboutData.lastName}</Title>
        <Subtitle>{aboutData.role}</Subtitle>
        <Description>{aboutData.description}</Description>
        <SocialLinks aria-label="Social links">
          <a href={aboutData.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Suspense fallback={<span />}><FaGithub /></Suspense>
          </a>
          <a href={aboutData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Suspense fallback={<span />}><FaLinkedin /></Suspense>
          </a>
          <a href={aboutData.socialLinks.email} aria-label="Email">
            <Suspense fallback={<span />}><FaEnvelope /></Suspense>
          </a>
        </SocialLinks>
      </TextCol>
    </Inner>
  </HeroSection>
);
