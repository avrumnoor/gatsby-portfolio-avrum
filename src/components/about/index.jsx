import React from "react"
import logo from "./producthub.png"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Title2, Text, Text2, SubTitle, ImgContainer} from './style';
import {SectionIntro, ContainerLayout, ResumeButton, ResumeButton2} from "../common";

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
      placeholderImage2: file(relativePath: { eq: "profilepic2web.webp" }) {
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
              <Title> Hello, I’m <b className="text-primary lined-link">Avrum Noor</b>.</Title>
              <Text> I'm a junior studying <b className="text-secondary lined-link2">Electrical Engineering</b> at 
              <b className="text-tertiary lined-link3">Stanford University</b>, advised by Prof. Nicholas
              Bambos and Ilai Bistritz. My research interests lie in the applications of game-theoretic machine learning 
              and artificial intelligence on resource allocation of communication networks. I also enjoy
              designing websites (like this one), building human-centered products, and studying philosophy.</Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle>That's me!</SubTitle>
            </div> 
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage2.childImageSharp.fluid} alt="user photo" />
            </div>
            <div>
              <Title>About Me</Title>
              <Text> I’m originally from Jakarta, Indonesia. </Text>
              <Text>
                Currently, I'm researching network algorithms and resource allocation tools at Stanford's NetLab. 
                Other than working with computers and networks, I like to teach myself UI/UX design and wireframing on the side, 
                so it's only
                right that one of the people whom I look up to growing up is Scott Forstall, the genius behind Apple's iOS, who 
                also attended Stanford. 
              </Text>
              <ResumeButton2 href="" target="_blank"> More about me </ResumeButton2>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
      <SectionIntro>
        <AboutSection>
            <div>
              <Title2>Startups</Title2>
              <Text2> Founder of <b className="text-primary lined-link">BELAJAR</b></Text2>
              <Text2> Founder of <b className="text-primary lined-link">Limbcarnation Prosthetics</b></Text2>
              <Text2> Co-Founder of <b className="text-primary lined-link">Stanford Product Hub</b></Text2>
              <Text2> Co-Founder of <b className="text-primary lined-link">Presque Partout Sino</b></Text2>
            </div>
            <div>
              <Title2>Skills</Title2>
              <Text2> <b className="text-primary lined-link">Circuit Design</b></Text2>
              <Text2> <b className="text-primary lined-link">Machine Learning</b></Text2>
              <Text2> <b className="text-primary lined-link">Network Research</b></Text2>
              <Text2> <b className="text-primary lined-link">Game Theory</b></Text2>
              <Text2> <b className="text-primary lined-link">Web Development</b></Text2>
              <Text2> <b className="text-primary lined-link">Product Design and Prototyping</b></Text2>
            </div>
          </AboutSection>
      </SectionIntro>
      <SectionIntro>
        <AboutSection>
            <div>
              <Title2>Frameworks & Tools</Title2>
              <Text2><b className="text-primary lined-link">GitHub</b> Source Control</Text2>
              <Text2><b className="text-primary lined-link">React</b>,&nbsp;
              <b className="text-primary lined-link">Gatsby</b>,&nbsp;
              <b className="text-primary lined-link">Hugo</b>,&nbsp;
              <b className="text-primary lined-link">Jekyll</b> &nbsp;
              Web Development
              </Text2>
              <Text2><b className="text-primary lined-link">GatsbyCloud</b>,&nbsp;
              <b className="text-primary lined-link">Netlify</b>,&nbsp;
              <b className="text-primary lined-link">GitHub Pages</b>&nbsp;
              CMS&nbsp;&&nbsp;Deployment&nbsp;
              </Text2>
              <Text2>
              <b className="text-primary lined-link">Inkscape</b>,&nbsp;
              <b className="text-primary lined-link">Photoshop</b>&nbsp;
              Isometric&nbsp;Art&nbsp;&&nbsp;Graphics&nbsp;Design
              </Text2>
            </div>
            <div>
              <Title2>Programming Languages</Title2>
              <Text2> <b className="text-primary lined-link">Python</b></Text2>
              <Text2> <b className="text-primary lined-link">C/C++</b></Text2>
              <Text2> <b className="text-primary lined-link">UNIX</b></Text2>
              <Text2> <b className="text-primary lined-link">HTML</b></Text2>
              <Text2> <b className="text-primary lined-link">CSS</b></Text2>
              <Text2> <b className="text-primary lined-link">JS</b></Text2>
              <Text2> <b className="text-primary lined-link">Swift</b></Text2>
            </div>
          </AboutSection>
      </SectionIntro>
    </>
  )
}


export default About
