import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> If you feel like our interests align, feel free to reach out.</p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div>
					</FooterBody>
					<div className="box">
						<SubRight> Building the future of network infrastructure, one algorithm at a time. </SubRight>
						<CopyRight className="text-dark">
							© 
							<span> 
								{new Date().getFullYear() }
          					</span> 
							{data.SiteAuthor} 
						</CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;