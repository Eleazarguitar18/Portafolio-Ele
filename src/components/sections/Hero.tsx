import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { lazy, Suspense } from "react";
import { aboutData } from "../../data/about";
const FaGithub = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaGithub })),
);
const FaLinkedin = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaLinkedin })),
);
const FaEnvelope = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaEnvelope })),
);

const HeroSection = styled.section`
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${({ theme }: any) => theme.colors.textLight};
  padding: ${({ theme }: any) => theme.spacing.lg} 0;

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    padding: ${({ theme }: any) => theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: ${({ theme }: any) => theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  background: ${({ theme }: any) => theme.colors.glass.background};
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: ${({ theme }: any) => theme.spacing.lg};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: ${({ theme }: any) => theme.spacing.xl};
  box-shadow: ${({ theme }: any) => theme.colors.glow.box};

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    padding: ${({ theme }: any) => theme.spacing.xl};
    flex-direction: row;
    justify-content: space-between;
  }
`;

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  
  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    width: 320px;
    height: 320px;
  }
`;

const Title = styled.h1`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: ${({ theme }: any) => theme.spacing.md};
  color: ${({ theme }: any) => theme.colors.light};
  text-shadow: ${({ theme }: any) => theme.colors.glow.text};
  line-height: 1.1;
  letter-spacing: -0.02em;
  white-space: nowrap;
`;

const Subtitle = styled.h2`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: ${({ theme }: any) => theme.spacing.lg};
  opacity: 0.9;
  font-weight: 500;
`;

const Description = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  max-width: 600px;
  margin-bottom: ${({ theme }: any) => theme.spacing.xl};
  opacity: 0.8;
  line-height: 1.7;
`;

const SocialLinks = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  display: flex;
  gap: ${({ theme }: any) => theme.spacing.md};

  a {
    color: ${({ theme }: any) => theme.colors.textLight};
    font-size: 1.5rem;
    transition: all ${({ theme }: any) => theme.transitions.default};
    padding: ${({ theme }: any) => theme.spacing.xs};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }: any) => theme.colors.glass.background};

    &:hover {
      color: ${({ theme }: any) => theme.colors.light};
      transform: translateY(-3px);
      background: ${({ theme }: any) => theme.colors.glass.card};
      box-shadow: ${({ theme }: any) => theme.colors.glow.box};
    }
  }

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    gap: ${({ theme }: any) => theme.spacing.lg};

    a {
      font-size: 1.75rem;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="hero" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContent>
          <div style={{ flex: 1 }}>
            <Title role="heading" aria-level={2}>
              {aboutData.greeting} <br /> {aboutData.name} <br />{aboutData.lastName}
            </Title>
            <Subtitle role="heading" aria-level={3}>
              {aboutData.role}
            </Subtitle>
            <Description role="paragraph">
              {aboutData.description}
            </Description>
            <SocialLinks role="list" aria-label="Social media links">
              <a
                href={aboutData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: "1.5rem", height: "1.5rem" }} />}>
                  <FaGithub aria-hidden="true" />
                </Suspense>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={aboutData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: "1.5rem", height: "1.5rem" }} />}>
                  <FaLinkedin aria-hidden="true" />
                </Suspense>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={aboutData.socialLinks.email}
                aria-label="Send me an email"
                role="listitem"
              >
                <Suspense fallback={<div style={{ width: "1.5rem", height: "1.5rem" }} />}>
                  <FaEnvelope aria-hidden="true" />
                </Suspense>
                <span className="sr-only">Email</span>
              </a>
            </SocialLinks>
          </div>
          <ProfileImage src={aboutData.profileImage} alt={aboutData.name} />
        </HeroContent>
      </div>
    </HeroSection>
  );
};
