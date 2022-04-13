import React from 'react';
import LinkButton from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faMasksTheater, faEnvelope } from '@fortawesome/pro-solid-svg-icons';

const LinksContainer = () => {

    return (
        <div className="links-container">
            <div className="social-links">
                <LinkButton
                    selector="instagram-button"
                    title="Instagram"
                    link="https://www.instagram.com/yourdramate/"
                    icon={<FontAwesomeIcon icon={faInstagram} fixedWidth />}
                />
                <LinkButton
                    selector="twitter-button"
                    title="Twitter"
                    link="https://twitter.com/yourdramate"
                    icon={<FontAwesomeIcon icon={faTwitter} fixedWidth />}
                />
                <LinkButton
                    selector="youtube-button"
                    title="YouTube"
                    link="https://www.youtube.com/channel/UC5Uaedmt-BN33m01mzqLDnw"
                    icon={<FontAwesomeIcon icon={faYoutube} fixedWidth />}
                />
                <LinkButton
                    selector="facebook-button"
                    title="Facebook"
                    link="https://www.facebook.com/dramate-201365721911583"
                    icon={<FontAwesomeIcon icon={faFacebook} fixedWidth />}
                />
                <LinkButton
                    selector="pinterest-button"
                    title="Pinterest"
                    link="https://www.pinterest.co.uk/yourdramate/"
                    icon={<FontAwesomeIcon icon={faPinterest} fixedWidth />}
                />
            </div>
            <div className="main-links">
                <LinkButton
                    selector="first-button"
                    name="Website"
                    title="Dramate Website"
                    link="https://www.dramate.co.uk/"
                    icon={<FontAwesomeIcon icon={faMasksTheater} fixedWidth />}
                />
                <LinkButton
                    selector="second-button"
                    name="Contact"
                    title="Contact Dramate"
                    link="mailto: contact@dramate.co.uk"
                    icon={<FontAwesomeIcon icon={faEnvelope} fixedWidth />}
                />
            </div>
        </div>
    )
}

export default LinksContainer;