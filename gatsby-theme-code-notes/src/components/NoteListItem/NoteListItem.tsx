/** @jsx jsx */
import { FunctionComponent } from 'react'
import { TagList } from '../TagList'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Heading, Flex, Box, Link } from 'theme-ui'
import { DateModified } from '../DateModified'

interface NoteListItemProps {
  name: string
  title: string
  emoji?: string
  dateModified: string
  tags: string[]
}

export const NoteListItem: FunctionComponent<NoteListItemProps> = ({
  name,
  title,
  dateModified,
  tags,
  emoji,
}) => {
  return (
    <Box as="article">
      <Link as={GatsbyLink} to={`/${name}`} variant="noteListItem">
        <Flex
          sx={{
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          <Heading as="h3" variant="noteListItem" sx={{ mr: '3' }}>
            {emoji} {title}
          </Heading>
          <Flex sx={{ alignItems: 'center', textAlign: 'right' }}>
            {tags && <TagList tags={tags} asLinks={false} />}
            {dateModified && (
              <Box ml={2}>
                <DateModified>{dateModified}</DateModified>
              </Box>
            )}
          </Flex>
        </Flex>
      </Link>
    </Box>
  )
}
