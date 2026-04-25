import React from 'react';
import { Code2, Globe, Mail, Network, Phone, Send } from 'lucide-react';

export type ContactItemType = "email" | "phone" | "website" | "linkedin" | "github" | "twitter";

interface Props {
  blank?: boolean;
  href: string;
  text: string;
  type?: ContactItemType;
  onMouseEnter?: () => void;
}

const iconProps = { 'aria-hidden': true, size: 17, strokeWidth: 1.5 } as const;

const renderIcon = (type: string) => {
  switch (type) {
    case "email":
      return <Mail {...iconProps} />;
    case "phone":
      return <Phone {...iconProps} />;
    case "website":
      return <Globe {...iconProps} />;
    case "linkedin":
      return <Network {...iconProps} />;
    case "github":
      return <Code2 {...iconProps} />;
    case "twitter":
      return <Send {...iconProps} />;
    default:
      return <Globe {...iconProps} />;
  }
}

export const ContactItem: React.FC<Props> = (props: Props) => {
  const { blank = false, href, text, type = "", onMouseEnter } = props;
  return (
    <a
      href={href}
      rel={blank ? "noopener noreferrer" : undefined}
      target={blank ? "_blank" : undefined}
      onMouseEnter={onMouseEnter}
      className="flex items-center gap-3 text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--primary-soft)]"
    >
      {renderIcon(type)}
      <span className="break-all text-sm">{text}</span>
    </a>
  );
}
