import { LucideIcon } from "lucide-react";

/**
 * Global SVG filter for pixelation - rendered once in the DOM
 */
export const PixelFilter = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <filter id="pixelate-sm">
        <feFlood x="2" y="2" height="1" width="1" />
        <feComposite width="4" height="4" />
        <feTile result="a" />
        <feComposite in="SourceGraphic" in2="a" operator="in" />
        <feMorphology operator="dilate" radius="2" />
      </filter>
      <filter id="pixelate-md">
        <feFlood x="3" y="3" height="1" width="1" />
        <feComposite width="5" height="5" />
        <feTile result="a" />
        <feComposite in="SourceGraphic" in2="a" operator="in" />
        <feMorphology operator="dilate" radius="2.5" />
      </filter>
    </defs>
  </svg>
);

interface PixelIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  strokeWidth?: number;
  pixelSize?: 'sm' | 'md';
}

export const PixelIcon = ({ 
  icon: Icon, 
  size = 20, 
  className = "", 
  strokeWidth = 2,
  pixelSize = 'sm'
}: PixelIconProps) => {
  return (
    <Icon 
      size={size} 
      strokeWidth={strokeWidth}
      className={className}
      style={{ filter: `url(#pixelate-${pixelSize})` }}
    />
  );
};
