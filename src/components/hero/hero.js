import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  opactiy: 0.4;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
  opactiy: 0.5;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 7rem;
  margin: 10px 60px;
  color: #3ded97;
  // text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  opacity: 1
  filter: blur(0px);
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
`

const BG = styled.div`
${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
height: 53vh;
background-attachment: fixed;
background-position: bottom center;
background-repeat: no-repeat;
background-size: cover;
filter: blur(5px);
`

const BGP = styled.div`
${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.portfolioCover)});`}
height: 53vh;
background-attachment: fixed;
background-position: bottom center;
background-repeat: no-repeat;
background-size: cover;
filter: blur(5px);
`

const Hero = ({ className, title, val }) => (
  <HeroContainer className={className}>
    <TitleContainer>
      {
        val === "portfolio" ? <BGP/> : <BG/>
      }
      <HeroTitle>{title}</HeroTitle>
    </TitleContainer>
  </HeroContainer>
)

// export default styled(Hero)`
//   ${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
//   height: 53vh;
//   background-attachment: fixed;
//   background-position: bottom center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `

export default Hero;