import LogoLoop from '../LogoLoop'
import { 
  SiPython, 
  SiCplusplus, 
  SiPhp, 
  SiMysql, 
  SiJavascript,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiReact,
  SiHtml5,
  SiOracle,
  SiGit,
  SiDocker,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiHuggingface
} from 'react-icons/si'
import { FaJava } from "react-icons/fa6";

export default function SkillsLoopSection() {
  // Map all skills to their corresponding icons
  const techLogos = [
    { 
      node: <SiPython className="text-[#3776AB]" />, 
      title: "Python",
    },
    { 
      node: <SiJavascript className="text-[#F7DF1E]" />, 
      title: "JavaScript",
    },
    { 
      node: <FaJava className="text-[#437291]" />, 
      title: "Java",
    },
    { 
      node: <SiCplusplus className="text-[#00599C]" />, 
      title: "C++",
    },
    { 
      node: <SiPhp className="text-[#777BB4]" />, 
      title: "PHP",
    },
    { 
      node: <SiPytorch className="text-[#EE4C2C]" />, 
      title: "PyTorch",
    },
    { 
      node: <SiTensorflow className="text-[#FF6F00]" />, 
      title: "TensorFlow",
    },
    { 
      node: <SiScikitlearn className="text-[#F7931E]" />, 
      title: "Scikit-learn",
    },
    { 
      node: <SiHuggingface className="text-[#FFD21E]" />, 
      title: "Hugging Face",
    },
    { 
      node: <SiPandas className="text-[#150458]" />, 
      title: "Pandas",
    },
    { 
      node: <SiNumpy className="text-[#013243]" />, 
      title: "NumPy",
    },
    { 
      node: <SiReact className="text-[#61DAFB]" />, 
      title: "React",
    },
    { 
      node: <SiHtml5 className="text-[#E34F26]" />, 
      title: "HTML5",
    },
    { 
      node: <SiMysql className="text-[#4479A1]" />, 
      title: "MySQL",
    },
    { 
      node: <SiOracle className="text-[#F80000]" />, 
      title: "Oracle",
    },
    { 
      node: <SiGit className="text-[#F05032]" />, 
      title: "Git",
    },
    { 
      node: <SiDocker className="text-[#2496ED]" />, 
      title: "Docker",
    },
    { 
      node: <SiJupyter className="text-[#F37626]" />, 
      title: "Jupyter",
    },
  ]

  return (
    <section
      id="skills"
      className="relative py-6 bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800"
    >
      <LogoLoop
        logos={techLogos}
        speed={40}
        direction="left"
        logoHeight={20}
        gap={20}
        pauseOnHover
        scaleOnHover
        showTitle
        ariaLabel="Technology skills and tools"
      />
    </section>
  )
}

