import React from 'react';
import { ContactItem, ContactItemType } from './ContactItem';
import { Website } from '../../../data/developer';

interface Props {
  email?: string;
  phone?: string;
  website?: Website;
  linkedin?: string;
  github?: string;
  twitter?: string;
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

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
      <ul className="space-y-3">
        {email && <li>
          <ContactItem href={`mailto:${email}`}
            text={email}
            type={'email'}
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
  );
}

export default Contact; 