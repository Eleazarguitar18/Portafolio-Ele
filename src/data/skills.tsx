import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaLinux, // <-- Agregado para Linux
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
  SiProxmox, // <-- Agregado para Proxmox
  SiNginx,   // <-- Agregado para Nginx
  SiApache,  // <-- Agregado para Apache
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
      { name: "MySQL", icon: <SiMysql /> }, // <-- Corregido el nombre aquí
    ],
  },
  {
    title: "DevOps & Servidores", // <-- Nombre actualizado para englobar todo
    icon: <FaDocker />,
    skills: [
      { name: "Linux", icon: <FaLinux /> },          // <-- Agregado
      { name: "Proxmox", icon: <SiProxmox /> },       // <-- Agregado
      { name: "Nginx", icon: <SiNginx /> },           // <-- Agregado
      { name: "Apache", icon: <SiApache /> },         // <-- Agregado
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "CI/CD", icon: <FaDatabase /> },
    ],
  },
];