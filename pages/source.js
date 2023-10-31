import NextLink from 'next/link'
import { Container, Heading, Link , List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../components/work"
import P from '../components/paragraph'
import Layout from "../components/layouts/article"
import Section from '../components/section'

const Source = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
            Source
            </Heading>
            <p>
                View the source code this site on GitHub!
            </p>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>View on Github</Meta>
                    <Link href="/">
                        / <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
            <p>
                This personal site was made possible by Takuya Matsuyama's tutorial on YouTube. Vist his website{' '}
          <Link as={NextLink} href="https://www.craftz.dog/" passHref scroll={false}>
            here!
          </Link>
            </p>
        </Container>
    )
}

export default Source