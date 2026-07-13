import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin,} from "react-icons/fa";
import { contactData } from "../../data/contact";

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

const Card = styled(motion.div)`
  max-width: 620px;
  margin: 0 auto;
  background: ${({ theme }: any) => theme.colors.glass.card};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) { padding: 3rem 2.5rem; }
`;

const ContactText = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: ${({ theme }: any) => theme.colors.textLight};
  line-height: 1.8;
`;

const EmailBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: ${({ theme }: any) => theme.colors.gradient.accent};
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: opacity 0.2s, transform 0.2s;
  word-break: break-all;

  @media (min-width: 480px) { word-break: normal; }

  &:hover { opacity: 0.9; transform: translateY(-2px); }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }: any) => theme.colors.glass.background};
  border: 1px solid ${({ theme }: any) => theme.colors.glass.border};
  color: ${({ theme }: any) => theme.colors.accent};
  font-size: 1.3rem;
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }: any) => theme.colors.light};
    box-shadow: ${({ theme }: any) => theme.colors.glow.box};
    transform: translateY(-4px);
  }
`;

const Contact = () => (
  <Section id="contact">
    <SectionTitle
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Contacto
    </SectionTitle>
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ContactText>{contactData.text}</ContactText>
      <EmailBtn
        href={`mailto:${contactData.email}`}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <FaEnvelope />
        {contactData.email}
      </EmailBtn>
      <SocialRow>
        <SocialLink href={contactData.socialLinks.github} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} aria-label="GitHub">
          <FaGithub />
        </SocialLink>
        <SocialLink href={contactData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} aria-label="LinkedIn">
          <FaLinkedin />
        </SocialLink>
        {/* <SocialLink href={contactData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} aria-label="Twitter">
          <FaTwitter />
        </SocialLink> */}
      </SocialRow>
    </Card>
  </Section>
);

export default Contact;
