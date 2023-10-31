import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"

const Work = () => (
    <Layout>
        <Container>
            <Title>
                AI-Climate Webpage
            </Title>

            <WorkImage src="/images/projects/AIClimate.png" alt="AI-Climate Webpage" />
            
            <P>
            This past summer the University of Minnesota received a grant from the AI-Climate Institute. And I was given the opportunity to assist in building the AI-Climate webpage on the university website. 
            </P>
            <br />
            <p>
            My Tasks included, meeting with the AI-Climate organizer to plan the webpage layout and discuss content for the pages, drafting and revising the webpage, and migrating the finalized content. 
            </p>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Webpage</Meta>
                    <Link href="https://cse.umn.edu/aiclimate/">
                        https://cse.umn.edu/aiclimate/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            
        </Container>
    </Layout>
)

export default Work