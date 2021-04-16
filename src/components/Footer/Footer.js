import React from 'react'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
  
  } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Click the links below to check out my socials
          </FooterSubHeading>
                <FooterSubText></FooterSubText>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
