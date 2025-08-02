import React from 'react';

export type ContactItemType = "email" | "phone" | "website" | "linkedin" | "github" | "twitter";

interface Props {
  blank?: boolean;
  href: string;
  text: string;
  type?: ContactItemType;
  onMouseEnter?: () => void;
}

const getIcon = (type: string) => {
  switch (type) {
    case "email":
      return "📧";
    case "phone":
      return "📞";
    case "website":
      return "🌐";
    case "linkedin":
      return "💼";
    case "github":
      return "🐙";
    case "twitter":
      return "🐦";
    default:
      return "📋";
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
      className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
    >
      <span className="mr-3 text-lg">{getIcon(type)}</span>
      <span className="text-sm">{text}</span>
    </a>
  );
} 