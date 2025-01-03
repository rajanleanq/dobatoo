import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  color,
}: ServiceCardProps) {
  return (
    <div className="group relative p-6 rounded-lg  bg-green-1000 dark:bg-[#1E293B]  hover:dark:bg-dark-200 hover:opacity-90 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity`}
      />
      <div className="relative">
        <div className="w-12 h-12 rounded-lg  bg-gray-50/20 dark:bg-primary-500/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-gray-50 dark:text-primary-1000" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
