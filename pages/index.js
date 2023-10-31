import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue,
    SimpleGrid,
    Link
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import { Bolded } from '../components/bio'
import { WorkGridItem } from "../components/grid-item"

import thumbAIClimate from '../public/images/projects/AIClimate.png'
import thumbWhalesNFT from '../public/images/projects/WhalesNFT.png'
import thumbChatBot from '../public/images/projects/ChatBot.png'
import thumbNumRec from '../public/images/projects/NumRec.png'


const Page = () => {
    return (
        <Layout>
    <Container>
        <Box 
        borderRadius="lg" 
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
        p={3} 
        mb={6} 
        align="center">
            Hello, welcome to my website. Here you&apos;ll find a showcase of my work and projects!
            
        </Box>

        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Philip Nguyen
                </Heading>
                <p>
                    Student / Software and Web Development Assistant
                    <br />
                    <Link href="https://www.linkedin.com/in/plipn0225/">
                        LinkedIn <ExternalLinkIcon mx="2px" />
                    </Link>
                </p>
            </Box>
            <Box 
            flexShrink={0} 
            mt={{ base: 4, md: 0 }} 
            ml={{ md: 6 }} 
            allign="center"
            >
                <Image 
                borderColor="whiteAlpha.800" 
                borderWidth ={2} 
                borderStyle="solid" 
                maxWidth="140px"
                display="inline-block"
                borderRadius="full"
                src="/images/philip.jpeg"
                alt="Profile Image"
                />
            </Box>
        </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>
                Hi, my name is Philip. I'm a junior at the University of Minnesota. I major in Computer Science I currently work as a Web and Software Development Assistant at the University of Minnesota.
            </Paragraph>
        <Box align="center" my={4}></Box>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Interests
            </Heading>
            <Paragraph>
                Art, Music, Video Games, Literature, Cooking
            </Paragraph>
        </Section>

        <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
                Completed Projects
            </Heading>
            
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="AIClimate" title="AI-Climate Webpage" thumbnail={thumbAIClimate}>
                        AI-Climate Institute webpage on University of Minnesota website
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="NumRec" title="Hand Written Digit Classifier" thumbnail={thumbNumRec}>
                        Trained model using MNIST dataset to classify hand drawn digits
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="WhalesNFT" title="Whale NFTs" thumbnail={thumbWhalesNFT}>
                        Lost money by making profile picture NFTs for myself and friends
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="ChatBot" title="Chat Bot" thumbnail={thumbChatBot}>
                        Chat bot made using ChatGPT api in Unity game engine
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Section>

        <Section delay={0.5}>
            <Heading as="h3" variant="section-title" >
                In-Progress Projects
            </Heading>
            <Bolded>Japanese Practice Site:</Bolded>
            <Paragraph>
                Website to assist in studying for current Japanese course
            </Paragraph>
            <Bolded>Idea:</Bolded>
            <p>
                - Generate practice problems using ChatGPT by passing vocab lists from current and past units.
            </p>
            <p>
                - Allow users to type and answer in romanji (romanized japanese) and convert to Japanese/Kanji on screen.
            </p>
        </Section>
        
    </Container>
    </Layout>
    )
}

export default Page
