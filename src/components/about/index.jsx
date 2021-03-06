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
      placeholderImage3: file(relativePath: { eq: "belajarapp.webp" }) {
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
              <Title> Hello, I’m <b className="text-primary lined-link">Avrum Noor</b>, a junior studying 
              &nbsp;<b className="text-secondary lined-link2">Electrical Engineering</b> at 
              &nbsp;<b className="text-tertiary lined-link3">Stanford University</b>.</Title>
              <Text> 
                If you're interested in connecting with me or have any questions about any of my works, 
                feel free to send me an <a href = "mailto:avrum@stanford.edu">email</a> or 
                find me on <a href = "https://www.linkedin.com/in/avrumnoor/">LinkedIn</a>/<a href = "https://github.com/avrumnoor">GitHub</a>.
              </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download my resume </ResumeButton>
            </div>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
            </div> 
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage3.childImageSharp.fluid} alt="user photo" />
            </div>
            <div>
              <Title>BELAJAR</Title>
              <Text> BELAJAR is the ultimate app for high school students. 
                It helps you manage your homeworks and keep track of your productivity. 
                Better than PowerSchool!
              </Text>
              <ResumeButton2 href="https://belajarapp.carrd.co/" target="_blank">Visit Website</ResumeButton2>
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
              <Text> I’m originally from Jakarta, Indonesia. As an electrical engineering major at Stanford, I'm advised by 
                Prof. Nicholas Bambos and Ilai Bistritz. My research interests lie in the applications of game-theoretic 
                machine learning and artificial intelligence on resource allocation of communication networks. I also enjoy
                designing websites (like this one), building human-centered products, and studying philosophy.
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
