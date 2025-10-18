import type { ReactElement } from "react";

export type Social = {
  name: string;
  to: string;
  icon: ReactElement;
};

type SocialIconProps = {
  item: Social;
};

function SocialIcon({ item }: SocialIconProps) {
  return (
    <a href={item.to} target="_blank" rel="noopener noreferrer" className="px-2 py-2 rounded-sm bg-primary/10 border border-primary/20 text-foreground hover:bg-primary/20 cursor-pointer">
      {item.icon}
    </a>
  );
}

export default SocialIcon;
