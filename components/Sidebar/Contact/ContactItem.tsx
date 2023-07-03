export type ContactItemType = "email" | "phone" | "website" | "linkedin" | "github" | "twitter";

interface Props {
    blank?: boolean,
    href: string,
    text: string,
    type?: ContactItemType,
    onMouseEnter?: () => void,
}

const faClass = (type: string) => {
    switch (type) {
        case "email":
            return "fa fa-envelope fa-lg";
        case "phone":
            return "fa fa-phone fa-lg";
        case "website":
            return "fa fa-globe fa-lg";
        case "linkedin":
            return "fa fa-linkedin fa-lg";
        case "github":
            return "fa fa-github fa-lg";
        case "twitter":
            return "fa fa-twitter fa-lg";
        default:
            return "";
    }
}

export const ContactItem: React.FC<Props> = (props: Props) => {
    const { blank = false, href, text, type = "", onMouseEnter } = props;
    return (
        <>
            <i className={faClass(type)} style={{ paddingRight: 10 }}></i>
            {blank ?
                <a href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                    onMouseEnter={onMouseEnter}>{text}
                </a>
                :
                <a href={href} onMouseEnter={onMouseEnter}>{text}</a>
            }
        </>
    )
}