import { graphql } from 'gatsby'
import { NotesList } from '../components/NotesList'

export default NotesList

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          parent {
            ... on File {
              name
              ctime(formatString: "Do MMM YYYY")
            }
          }
        }
      }
    }
  }
`