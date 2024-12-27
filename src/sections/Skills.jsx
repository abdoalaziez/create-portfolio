// import Card from "../components/Card";
// import{
//   FaReact,
//   FaHTML,
//   FaCss3Alt,
//   Fajs,
//   FaFigma,
//   FaMobileAlt,
// }from "react/Icons/fa";
// import {SiTailwindSCC }from "react/Icons/si";
// const Skills = () => {
// const skills = [

//     {
//       SkillName: "HTML",
//       SkillLevel: "Intermediate",
//       SkillLevelBgColor: "bg-yellow-500",
//       SkillLevelTextColor: "text-white",
//       SkillLevelBorderColor: "border-yellow-500",
//     },
//     {
//       SkillName: "CSS",
//       SkillLevel: "Intermediate",
//       SkillLevelBgColor: "bg-blue-500",
//       SkillLevelTextColor: "text-white",
//       SkillLevelBorderColor: "border-blue-500",
//     },
//     {
//       SkillName: "Javascript",
//       SkillLevel: "Intermediate",
//       SkillLevelBgColor: "bg-purple-500",
//       SkillLevelTextColor: "text-white",
//       SkillLevelBorderColor: "border-purple-500",
//     },
//     {
//       SkillName: "Responsive",
//       SkillLevel: "Intermediate",
//       SkillLevelBgColor: "bg-green-500",
//       SkillLevelTextColor: "text-white",
//       SkillLevelBorderColor: "border-green-500",
//     },
//     {
//       SkillName: "React",
//       SkillLevel: "Intermediate",
//       SkillLevelBgColor: "bg-red-500",
//       SkillLevelTextColor: "text-white",
//       SkillLevelBorderColor: "border-red-500",
//     },
//     {
//       SkillName: "TailwindCss",
//       SkillLevel: "Intermediate",
//       SkillLevelBgColor: "bg-blue-900",
//       SkillLevelTextColor: "text-white",
//       SkillLevelBorderColor: "border-blue-900",
//     },
//     {
//       SkillName: "Figma",
//       SkillLevel: "Intermediate",
//       SkillLevelBgColor: "bg-blue-900",
//       SkillLevelTextColor: "text-white",
//       SkillLevelBorderColor: "border-blue-900",
//     },
//   ];
//   return (
//     <main id="skills" className="h-screen py-10 ">
//       <div className="max-w-5xl mx-auto p-10 flex flex-wrap gap-6">
//         {skills.map((skill, index) => (
//           <Card
//             key={index}
//             SkillName={skill.SkillName}
//             SkillLevel={skill.SkillLevel}
//             SkillLevelBgColor={skill.SkillLevelBgColor}
//             SkillLevelTextColor={skill.SkillLevelTextColor}
//             SkillLevelBorderColor={skill.SkillLevelBorderColor}
//           />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Skills;








import Card from "../components/Card";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaMobileAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      SkillName: "HTML",
      SkillLevel: "Intermediate",
      SkillLevelBgColor: "bg-yellow-500",
      SkillLevelTextColor: "text-white",
      SkillLevelBorderColor: "border-yellow-500",
      Icon: FaHtml5,
    },
    {
      SkillName: "CSS",
      SkillLevel: "Intermediate",
      SkillLevelBgColor: "bg-blue-500",
      SkillLevelTextColor: "text-white",
      SkillLevelBorderColor: "border-blue-500",
      Icon: FaCss3Alt,
    },
    {
      SkillName: "JavaScript",
    SkillLevel: "Intermediate",
    SkillLevelBgColor: "bg-purple-500",
    SkillLevelTextColor: "text-white",
    SkillLevelBorderColor: "border-purple-500",
    Icon: FaJs,
    SkillTranslate: "translate-y-5",
    },
    {
      SkillName: "Responsive",
      SkillLevel: "Intermediate",
      SkillLevelBgColor: "bg-green-500",
      SkillLevelTextColor: "text-white",
      SkillLevelBorderColor: "border-green-500",
      Icon: FaMobileAlt,
    },
    {
      SkillName: "React",
      SkillLevel: "Intermediate",
      SkillLevelBgColor: "bg-red-500",
      SkillLevelTextColor: "text-white",
      SkillLevelBorderColor: "border-red-500",
      Icon: FaReact,
    },
    {
      SkillName: "TailwindCSS",
      SkillLevel: "Intermediate",
      SkillLevelBgColor: "bg-blue-900",
      SkillLevelTextColor: "text-white",
      SkillLevelBorderColor: "border-blue-900",
      Icon: SiTailwindcss,
    },
    {
      SkillName: "Figma",
      SkillLevel: "Intermediate",
      SkillLevelBgColor: "bg-yellow-500",
      SkillLevelTextColor: "text-white",
      SkillLevelBorderColor: "border-blue-600",
      Icon: FaFigma,
    },
    {
      SkillName: "Git",
      SkillLevel: "Intermediate",
      SkillLevelBgColor: "bg-yellow-900",
      SkillLevelTextColor: "text-white",
      SkillLevelBorderColor: "border-blue-900",
      Icon:FaGithub,
    },
  ];

  return (
    <main id="skills" className="h-screen py-48 flex justify-center items-center">
      <div className="max-w-5xl mx-auto p-10 flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <Card
            key={index}
            SkillName={skill.SkillName}
            SkillLevel={skill.SkillLevel}
            SkillLevelBgColor={skill.SkillLevelBgColor}
            SkillLevelTextColor={skill.SkillLevelTextColor}
            SkillLevelBorderColor={skill.SkillLevelBorderColor}
            Icon={skill.Icon}
          />
        ))}
      </div>
    </main>
  );
};

export default Skills;
