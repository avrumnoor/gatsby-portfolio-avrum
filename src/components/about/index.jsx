import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Title2, Text, Text2, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle>Electrical Engineer & Web Developer</SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Avrum Noor.</Title>
              <Text> I'm a junior studying <b className="text-primary lined-link">Electrical Engineering</b> at <b className="text-primary lined-link">Stanford, University</b>.</Text>
              <Text> I love working with modern technologies, studying computer networks and systems, and designing interactive websites.</Text>
              <Text> I'm currently researching network algorithms and resource allocation tools at Stanford's NetLab. 
              </Text>
              <Text> I'm originally from <b className="text-primary lined-link">Jakarta, Indonesia</b>.</Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
      <SectionIntro>
        <AboutSection>
            <div>
              <Title2>My Startups</Title2>
              <Text2> <b className="text-primary lined-link">Stanford Product Hub</b></Text2>
              <Text2> <b className="text-primary lined-link">Presque Partout Sino</b></Text2>
              <Text2> <b className="text-primary lined-link">BELAJAR</b></Text2>
            </div>
            <div>
              <Title2>My Skills</Title2>
              <Text2> <b className="text-primary lined-link">Machine Learning</b></Text2>
              <Text2> <b className="text-primary lined-link">Network Research</b></Text2>
              <Text2> <b className="text-primary lined-link">Game Theory</b></Text2>
              <Text2> <b className="text-primary lined-link">Web Development</b></Text2>
              <Text2> <b className="text-primary lined-link">Product Design</b></Text2>
            </div>
          </AboutSection>
      </SectionIntro>
    </>
  )
}


export default About
