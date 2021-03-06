import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { spacing, breakpoints, shuffleArray } from '../utils/constants'

import Project from '../components/Project'
import SearchField from '../components/SearchField'
import GridStatement from '../components/GridStatement'
import Toolbar from '../components/Toolbar'
import 'intersection-observer'

const Container = styled.div`
  height: 100%;
`

const ProjectGrid = styled.div`
  display: grid;
  margin-right: -1px;
  padding: ${spacing.big + 2}px 0 0;


  grid-template-columns: repeat(auto-fit, minmax(550px, 2fr));

  @media (max-width: 813px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, 1fr);
  }
`

const FiltersContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  border-left: 1px solid black;
`

const StyledButton = styled.button`
  outline: none;
  border: none;
  text-transform: uppercase;
  background-color: transparent;
`

function FilterButton(props) {
  return(
    <StyledButton onClick={() => props.handleCategoryUpdate(props.category)}>
      {props.category || "All"}
    </StyledButton>
  )
}

// page component
export default class Work extends React.Component {
  state = {
    search: "",
    category: ""
  }

  updateCategory = (e) => {
    this.setState({
      category: e
    })
  }

  updateSearch = (e) => {
    let inputValue = e.target.value.toLowerCase() || "";

    this.setState({
      search: inputValue,
    })
  }

  render() {
    const projects = this.props.data.allMarkdownRemark.edges;

    const filteredCategory = projects.filter(({node: project}) => {
      let projCategories = [project.frontmatter.category];

      for (let category of projCategories) {
        if (category.indexOf(this.state.category) === -1 )
          return false
        }
      return true;
    });

    const filteredSearch = filteredCategory.filter(({ node: project }) => {
      return project.frontmatter.name.toLowerCase().indexOf(this.state.search) !== -1 ||
        project.frontmatter.title.toLowerCase().indexOf(this.state.search) !== -1;
    });


    // for (let p of filteredSearch) {
    //   console.log(p.node.frontmatter.name);
    //   console.log(p.node.frontmatter.thumbnail.childImageSharp.sizes);

    // }


    return (
      <Container>

        <Helmet title="THE NEXT | WORK"/>

        <Toolbar>
          <SearchField
            value={this.state.search}
            onChange={this.updateSearch}
          />

          {/* <FiltersContainer>
            <FilterButton handleCategoryUpdate={this.updateCategory} category="" />
            <FilterButton handleCategoryUpdate={this.updateCategory} category="UI/UX" />
            <FilterButton handleCategoryUpdate={this.updateCategory} category="Product Design"/>
            <FilterButton handleCategoryUpdate={this.updateCategory} category="Typography" />
            <FilterButton handleCategoryUpdate={this.updateCategory} category="Print" />
          </FiltersContainer> */}

        </Toolbar>

        <ProjectGrid>
          <GridStatement
            work
            verb="Explore"
            noun="project"
          />

          {filteredSearch.map(({ node: project }) => (
            <Project
              title={project.frontmatter.title}
              image={project.frontmatter.thumbnail.childImageSharp.sizes}
              path={project.fields.slug}
              graduate={project.frontmatter.name}
              key={project.id}
            />
          ))}
        </ProjectGrid>

      </Container>
    )
  }

}

// data query
export const query = graphql`
  query WorkQuery {
    allMarkdownRemark {
      edges {
        node {
          id

          fields {
            slug
          }
          frontmatter {
            title
            name
            category


            thumbnail {
              childImageSharp {
                sizes(maxHeight: 500, maxWidth: 500, quality: 90, cropFocus: CENTER) {
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
