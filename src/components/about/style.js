import Img from "gatsby-image"
import styled from 'styled-components';
import variables from '../../data/variables';

export const AboutSection = styled.section`
  text-align: center;
  @media only screen and (min-width: ${variables.breakpointLarge}) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-gap: 10rem;
    text-align: left;
  }
`
export const Avatar =styled(Img)`
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`

export const ImgContainer =styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.15);
  width: 100%;
`
export const Title = styled.h1`
  font-size: 1.8rem;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
  }
`
export const Title2 = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  text-transform: capitalize;
  font-family: "GT-Walsheim-Pro-Bold";
  @media(max-width: ${variables.breakpointPhone}) {
    font-size: 2rem;
    text-align: center;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  color: #69737c;
  a {
    color: #69737c;
    text-decoration: underline;
  }
`

export const Text2 = styled.p`
  font-size: 1.2rem;
  text-align: center;
  line-height: 2;
  color: #69737c;
  a {
    color: #3F51B5;
    text-decoration: underline;
  }
`
export const SubTitle = styled.h2`
  font-family: "GT-Walsheim-Pro-Medium";
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 8px;
  @media(min-width: ${variables.breakpointPhone}) {
    font-size: 1.8em;
  }
`