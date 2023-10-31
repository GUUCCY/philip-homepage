import { Container } from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"

const Work = () => (
    <Layout>
        <Container>
            <Title>
                Chat Bot in Unity Game Engine Using ChatGPT API
            </Title>

            <WorkImage src="/images/projects/ChatBot.png" alt="Chat Bot Webpage" />
            
            <P>
            I had noticed that my student credits for the ChatGPT API were going to expire soon, so I wanted to at least learn about how they worked. I decided that I wanted to make a visual novel like interface where the user can talk to a character.             </P>
            <br />
            <p>
            I started by creating the interface by piecing together parts from multiple Unity tutorials and creating a little pixel art character that would wander around a room. Then once I was able to grab user input I processed it into the correct structure to send off to the API.
            </p>
            
            
            
        </Container>
    </Layout>
)

export default Work