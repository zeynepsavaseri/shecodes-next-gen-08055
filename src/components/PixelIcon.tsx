import { LucideIcon } from "lucide-react";

interface PixelIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export const PixelIcon = ({ icon: Icon, size = 20, className = "", strokeWidth = 1.5 }: PixelIconProps) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Hidden SVG filter definition */}
      <svg width="0" height="0" className="absolute">
        <filter id="pixelate" x="0" y="0" width="100%" height="100%">
          <feFlood x="2" y="2" height="1" width="1" />
          <feComposite width={Math.max(4, Math.round(size / 5))} height={Math.max(4, Math.round(size / 5))} />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" radius={Math.max(1, Math.round(size / 12))} />
        </filter>
      </svg>
      <Icon 
        size={size} 
        strokeWidth={strokeWidth}
        style={{ filter: 'url(#pixelate)' }}
      />
    </div>
  );
};
