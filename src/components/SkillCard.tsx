
interface SkillCardProps {
  title: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
}

export const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-6 transition-all duration-300 hover:transform hover:scale-105"
         style={{ backgroundColor: 'var(--card-bg)' }}>
      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center md:text-left">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center space-x-2 p-2 rounded-md hover:bg-opacity-20 transition-colors duration-200"
               style={{ backgroundColor: 'var(--card-bg)' }}>
            <img src={skill.icon} alt={skill.name} className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span className="text-sm md:text-base truncate">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};