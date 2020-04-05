import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
      height={['25vh', '20vh']}
      width={['75vw', '64vw']}
      invertX
    />
    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />
    <Triangle
      color="primaryLight"
      height={['30vh', '40vh']}
      width={['95vw', '60vw']}
      invertY
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks, roles } = contentfulAbout;
        const { deterministicBehaviour } = site.siteMetadata;

        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[5, 6, 8]}
              mb={[1, 3, 3]}
            >
              {`Hi there, I'm ${name} !`}
            </Heading>

            <Heading
              as="h2"
              color="primary"
              fontSize={[3, 4, 4]}
              mb={[2, 3, 4]}
              textAlign="center"
              style={centerHorizontally}
            >
              <TextLoop interval={5000}>
                {roles
                  .sort(() => deterministicBehaviour || Math.random() - 0.5)
                  .map((text) => (
                    <Text width={[300, 500]} key={text}>
                      {text}
                    </Text>
                  ))}
              </TextLoop>
            </Heading>

            <Text
              fontSize={[3, 4, 4]}
              width={[3 / 4, 2 / 3, 1 / 2]}
              textAlign="center"
              style={centerHorizontally}
              mb={[2, 3, 4]}
            >
              I'm a fullstack Software Engineer at Orange Logc where I help
              build Cortex, the best Digital Asset Management on the market.
            </Text>

            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[3, 4, 4]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>

            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
