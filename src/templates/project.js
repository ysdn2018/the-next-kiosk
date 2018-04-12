import React from 'react';
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { spacing, breakpoints } from '../utils/constants'
import Project from '../components/Project'
import Statement from '../components/Statement'
import TypePicker from '../components/TypePicker'
import 'intersection-observer'

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    return arr;
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// styled-components
const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

const InfoContainer = styled.div `
  width: 23%;
  height: 100%;
  border-right: 1px solid;
  margin: 0;
  position: fixed;
`

const BackButton = styled.div `
  width: 100%;
  border-bottom: 1px solid;
  padding: 0 ${spacing.small}px;

  h2 {
    margin-bottom: 2px;
  }

  &:hover {
    background-color: black;
    color: white;
    text-decoration: none;
  }
`

const Title = styled.div `
  padding: ${spacing.small}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;
  border-bottom: 1px solid;
`

const Info = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Description = styled.div `
  padding: ${spacing.small}px;
  font-size: 1.3em;
  line-height: 1.4;
  white-space: pre-wrap;
`

;







// /* BOTTOM STUFF */
// const RelatedProjects = styled.div`
//   display: flex;
//
//   @media screen and (max-width: ${breakpoints.tablet} ) {
//     flex-wrap: wrap;
//   }
//
//   @media screen and (max-width: ${breakpoints.mobile} ) {
//     display: block;
//   }
// `
//
// const ProjectContainer = styled.div`
//   border-left: 1px solid;
//   margin-left: -1px;
//   flex: 1;
//
//   @media screen and (max-width: ${breakpoints.tablet} ) {
//     &:last-child {
//       display: none;
//     }
//   }
//
//   @media screen and (max-width: ${breakpoints.mobile} ) {
//     ${'' /* width: 100%; */}
//     border-bottom: 1px solid black;
//
//     &:last-child {
//       display: block;
//     }
//   }
//
// `
//
// const ImageContainer = styled.div`
//   width: 100%;
//   padding: 15%;
//
// `
//
// const TextContainer = styled.div`
//   display: flex;
//   padding: 0 ${spacing.small}px ${spacing.small}px ;
//
//   justify-content: space-between;
//   align-items: flex-end;
// `
//
// const Text = styled.p`
//   z-index: 4;
//   color: black;
//   max-width: 400px;
//
//   margin: 0.4rem;
//   font-size: 1.4rem;
//   line-height: 1.2;
//   width: 100%;
//
// &:first-of-type {
//   text-transform: uppercase;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   overflow: hidden;
//   flex: 1;
// }
//
// &:last-of-type {
//   flex: 2;
//   text-align: right;
// }
// `
//
// const BottomSection = styled.div`
//
// `;
//
// const RelatedText = styled.div`
//   height: 130px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-top: 1px solid black;
//   border-bottom: 1px solid black;
//   line-height: 1.3;
//
//   h3, h4 {
//     max-width: calc(100% - ${spacing.big}px);
//     text-align: center;
//     text-transform: none;
//   }
//
//   @media screen and (max-width: ${breakpoints.mobile} ) {
//     h3 {
//       font-size: 2.2rem;
//     }
//   }
// `;

// page template component
export default function Post({ data }) {
  const project = data.markdownRemark;
  const grad = project.frontmatter.graduate;

  return (
    <Container>

      <InfoContainer>

        <Link to="/">
        <BackButton>
          <h2>&larr;</h2>
        </BackButton>
        </Link>

        <Title>
          <h1>{project.frontmatter.title}</h1>
          <Info>
            <h3>{project.frontmatter.name}</h3>
            {project.frontmatter.category && (
              <h3>{project.frontmatter.category}</h3>
            )}
          </Info>
        </Title>

        <Description>{project.frontmatter.intro}</Description>

      </InfoContainer>

      <TypePicker
        title={project.frontmatter.title}
        type={project.frontmatter.type}
        projectLink={project.frontmatter.projectLink}
        projectList={project.frontmatter.list}
        {...data.markdownRemark.frontmatter}
      />

      {/* <BottomSection>
        <RelatedText>
          <h3>See more work like {project.frontmatter.title}</h3>
        </RelatedText>

        <RelatedProjects>

          {data.projectByStudent && getRandom(data.projectByStudent.edges, 1).map(({ node: otherProj }) =>

            <ProjectContainer>
              <Link to={otherProj.fields.slug}>

                <ImageContainer>
                  <Img sizes={otherProj.frontmatter.thumbnail.childImageSharp.sizes} />
                </ImageContainer>

                <TextContainer>
                  <Text>{otherProj.frontmatter.title.length > 15 ? (otherProj.frontmatter.title.slice(0, 15) + "…") : otherProj.frontmatter.title}</Text>
                  <Text>{otherProj.frontmatter.graduate}</Text>
                </TextContainer>

              </Link>
            </ProjectContainer>

          )}

          {data.projectsInCategory && (getRandom(data.projectsInCategory.edges, 2).map(({ node: otherProj }) =>
            <ProjectContainer>
              <Link to={otherProj.fields.slug}>

                <ImageContainer>
                  <Img sizes={otherProj.frontmatter.thumbnail.childImageSharp.sizes} />
                </ImageContainer>

                <TextContainer>
                  <Text>{otherProj.frontmatter.title.length > 15 ? (otherProj.frontmatter.title.slice(0, 15) + "…") : otherProj.frontmatter.title}</Text>
                  <Text>{otherProj.frontmatter.graduate}</Text>
                </TextContainer>
              </Link>
            </ProjectContainer>
          ))}
        </RelatedProjects>
      </BottomSection> */}


    </Container>
  );
};


// template query
export const aboutPageQuery = graphql`
  query ProjectPage($slug: String!, $graduate: String!, $graduateName: String!, $category: String!, $title: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        name
        category
        intro
        type

        projectLink


        videoOne
        videoTwo

        imageOne {
          relativePath
        }
        
        imageTwo {
          relativePath
        }
        imageThree {
          relativePath
        }

        thumbnail {
          childImageSharp {
            sizes(maxWidth: 1500, maxHeight: 1000, quality: 90, cropFocus: CENTER) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

  projectsInCategory: allMarkdownRemark(filter: { frontmatter: { category: { regex: $category }, name: { ne: $graduateName }}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            name

            thumbnail {
              childImageSharp {
                sizes(maxWidth: 600, maxHeight: 400, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }


  projectByStudent: allMarkdownRemark(
    filter: { frontmatter: { name: { regex: $graduate }, title: { ne: $title }}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            name

            thumbnail {
              childImageSharp {
                sizes(maxWidth: 600, maxHeight: 400, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }

  }
`;
