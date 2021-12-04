import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: fill;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`


const Portifolio = ({ className, location }) => {

  const title = "Portfolio"
  const { keywords, portifolio } = siteConfig
  return (
    <Layout location={location}>
      <SEO style={{ color: '#FF9400' }}
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('/images/portfoliocover.jpg')}
        title={title}
        val="portfolio"
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row xs={2} md={4} lg={6} className="d-flex flex-row">
            {portifolio.map(job => (
              <Col
                key={job.description}
                className="col-lg-3 col-6 d-flex flex-row"
              >
                <JobCard
                  as={job.url ? "a" : "div"}
                  href={job.url}
                  target="_blank"
                >
                  
                    <Image src={withPrefix(job.image)} height="1000px" width="1200px" />
                    <p>{job.description}</p>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Portifolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`