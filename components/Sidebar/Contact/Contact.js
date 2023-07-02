import React from 'react'

function Contact(props){
    const listItem = (prop, name, faClass, href, blank, text) => {
        if (prop) {
            return (
                <li className={name}>
                    <i className={faClass} style={{paddingRight: 10}}></i>
                    {blank ? 
                        <a href={href} rel="noopener noreferrer" target="_blank">{text}</a>
                        :
                        <a href={href}>{text}</a>
                    }
                </li>
            )
        } else {
            return null;
        }
    }

    let email = listItem(props.email, "email", "fa fa-envelope fa-lg", `mailto: ${props.email}`, false, props.email);
    let phone = listItem(props.phone, "phone", "fa fa-phone fa-lg", `tel:${props.phone}`, false, props.phone);
    let website = listItem(props.website, "website", "fa fa-globe fa-lg", props.website.url, true,  props.website.name);
    let linkedin = listItem(props.linkedin, "linkedin", "fa fa-linkedin fa-lg", `https://linkedin.com/in/${props.linkedin}`, true, props.linkedin);
    let github = listItem(props.linkedin, "github", "fa fa-github fa-lg", `https://github.com/${props.github}`, true, props.github);
    let twitter = listItem(props.twitter, "twitter", "fa fa-twitter fa-lg", `https://twitter.com/${props.twitter}`, true, `@${props.twitter}`);

    return (
        <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
                {email}
                {phone}
                {website}
                {linkedin}
                {github}
                {twitter}
            </ul>
        </div>
    )
}

export default Contact