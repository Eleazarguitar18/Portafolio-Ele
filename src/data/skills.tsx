import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiLaravel,
  SiLivewire,
  SiSqlite,
  SiMysql,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Livewire", icon: <SiLivewire /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL Server", icon: <SiSqlite /> },
      { name: "PostgreSQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "DevOps",
    icon: <FaDocker />,
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "CI/CD", icon: <FaDatabase /> },
    ],
  },
];
