import { Container } from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"

const Work = () => (
    <Layout>
        <Container>
            <Title>
                Whale NFTs
            </Title>

            <WorkImage src="/images/projects/WhalesNFT.png" alt="Whale NFTs Webpage" />
            
            <P>
            Back when NFTs were all the rage I wanted to make NFT profile pictures for myself and my friends. I started by creating a character, then separating all the augmentable parts to be passed into a program. Using python, I set certain restraints on color palette and rarity of certain traits before letting the program generate a set of Whales.             
            </P>
            <br />
            <p>
            But, just having the Whales in a folder was not enough for me. I wanted to officially own them on the blockchain and distribute them to my friends. This was before I knew about minting fees and the crazy high costs for transactions. In the end I minted my batch but never ended up distributing them to my friends accounts because the minting fee was nearly $50. 
            </p>
            <br />
            <p>Losing money yay!</p>
            

            
        </Container>
    </Layout>
)

export default Work