import React from 'react'
import { usePostHog } from 'posthog-js/react'
import { ContactItem, ContactItemType } from './ContactItem';

type Prop = string & {
    url: string,
    name: string,
}

interface Props {
    email?: string,
    phone?: string,
    website?: Prop,
    linkedin?: string,
    github?: string,
    twitter?: string,
}

function Contact(props: Props) {

    const {
        email,
        phone,
        website,
        linkedin,
        github,
        twitter,
    } = props;

    const posthog = usePostHog()

    const [trackEmailHover, setTrackEmailHover] = React.useState(true)

    return (
        <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
                {email && <li>
                    <ContactItem href={`mailto:${email}`}
                        text={email}
                        type={'email'}
                        onMouseEnter={() => {
                            if (trackEmailHover) {
                                posthog.capture("email mouse entered")
                                setTrackEmailHover(false)
                            }
                        }}
                    />
                </li>}
                {phone && <li>
                    <ContactItem href={`tel:${phone}`}
                        text={phone}
                        type={'phone'}
                    />
                </li>}
                {website && <li>
                    <ContactItem href={website.url}
                        text={website.name}
                        type={'website'}
                        blank
                    />
                </li>}
                {linkedin && <li>
                    <ContactItem href={`https://linkedin.com/in/${linkedin}`}
                        text={linkedin}
                        type={'linkedin'}
                        blank
                    />
                </li>}
                {github && <li>
                    <ContactItem href={`https://github.com/${props.github}`}
                        text={github}
                        type={'github'}
                        blank
                    />
                </li>}
                {twitter && <li>
                    <ContactItem href={`https://twitter.com/${props.twitter}`}
                        text={twitter}
                        type={'twitter'}
                        blank
                    />
                </li>}
            </ul>
        </div>
    )
}

export default Contact