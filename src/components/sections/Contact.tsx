import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { contactData } from "../../data/contact";

const ContactSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }: any) => theme.colors.textLight};
  padding: ${({ theme }: any) => theme.spacing.lg} 0;

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    padding: ${({ theme }: any) => theme.spacing.xl} 0;
  }

  .container {
    position: relative;
    z-index: 2;
    width: 95%;
    margin: 0 auto;

    @media (min-width: ${({ theme }: any) => theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${({ theme }: any) => theme.spacing.lg};
  color: ${({ theme }: any) => theme.colors.light};
  text-shadow: ${({ theme }: any) => theme.colors.glow.text};
  position: relative;

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }: any) => theme.spacing.xl};
  }

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
`;

const ContactContent = styled.div`
  max-width: 600px;
  margin: ${({ theme }: any) => theme.spacing.lg} auto;
  text-align: center;
  background: ${({ theme }: any) => theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${({ theme }: any) => theme.spacing.lg};
  border-radius: 20px;
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  box-shadow: ${({ theme }: any) => theme.colors.glow.box};

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    margin: ${({ theme }: any) => theme.spacing.xl} auto;
    padding: ${({ theme }: any) => theme.spacing.xl};
  }
`;

const ContactText = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin-bottom: ${({ theme }: any) => theme.spacing.lg};
  color: ${({ theme }: any) => theme.colors.textLight};
  line-height: 1.8;
  opacity: 0.9;

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }: any) => theme.spacing.xl};
  }
`;

const ContactEmail = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }: any) => theme.spacing.sm};
  font-size: clamp(0.9rem, 2vw, 1.3rem);
  color: ${({ theme }: any) => theme.colors.accent};
  margin-bottom: ${({ theme }: any) => theme.spacing.lg};
  padding: ${({ theme }: any) => theme.spacing.sm} ${({ theme }: any) => theme.spacing.lg};
  border-radius: 30px;
  transition: all ${({ theme }: any) => theme.transitions.default};
  font-weight: 500;
  background: ${({ theme }: any) => theme.colors.glass.card};
  border: 1px solid ${({ theme }: any) => theme.colors.accent};
  word-break: break-all;

  @media (min-width: ${({ theme }: any) => theme.breakpoints.sm}) {
    word-break: normal;
    padding: ${({ theme }: any) => theme.spacing.md} ${({ theme }: any) => theme.spacing.lg};
  }

  svg {
    font-size: 1.2em;
    flex-shrink: 0;

    @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
      font-size: 1.4em;
    }
  }

  &:hover {
    background: ${({ theme }: any) => theme.colors.gradient.accent};
    color: ${({ theme }: any) => theme.colors.textDark};
    transform: translateY(-3px);
    box-shadow: 0 6px 16px ${({ theme }: any) => theme.colors.overlay.dark};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }: any) => theme.spacing.md};
  margin-top: ${({ theme }: any) => theme.spacing.lg};

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    gap: ${({ theme }: any) => theme.spacing.lg};
    margin-top: ${({ theme }: any) => theme.spacing.xl};
  }
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }: any) => theme.colors.accent};
  font-size: 1.6rem;
  transition: all ${({ theme }: any) => theme.transitions.default};
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }: any) => theme.colors.glass.card};
  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.1);

  @media (min-width: ${({ theme }: any) => theme.breakpoints.md}) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  &:hover {
    color: ${({ theme }: any) => theme.colors.light};
    transform: translateY(-3px) rotate(8deg);
    box-shadow: ${({ theme }: any) => theme.colors.glow.box};
    background: ${({ theme }: any) => theme.colors.gradient.glass};
  }
`;

const Contact = () => {
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
    <ContactSection id="contact" role="region" aria-label="Contact Information">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle variants={itemVariants} role="heading" aria-level={2}>
            Contacto
          </SectionTitle>
          <ContactContent role="article">
            <ContactText variants={itemVariants} role="paragraph">
              {contactData.text}
            </ContactText>
            <ContactEmail
              href={`mailto:${contactData.email}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Send me an email at ${contactData.email}`}
            >
              <FaEnvelope aria-hidden="true" />
              <span>{contactData.email}</span>
            </ContactEmail>
            <SocialLinks
              variants={itemVariants}
              role="list"
              aria-label="Social media links"
            >
              <SocialLink
                href={contactData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                role="listitem"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </SocialLink>
              <SocialLink
                href={contactData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                role="listitem"
                aria-label="Connect with me on LinkedIn"
              >
                <FaLinkedin aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </SocialLink>
              <SocialLink
                href={contactData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                role="listitem"
                aria-label="Follow me on Twitter"
              >
                <FaTwitter aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </SocialLink>
            </SocialLinks>
          </ContactContent>
        </motion.div>
      </div>
    </ContactSection>
  );
};

export default Contact;
