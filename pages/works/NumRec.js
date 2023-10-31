import { Container } from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"

const Work = () => (
    <Layout>
        <Container>
            <Title>
                Hand Written Digit Classifier
            </Title>

            <WorkImage src="/images/projects/NumRec.png" alt="NumRec Webpage" />
            
            <P>
                For this project I had bought the O&apos;Reilly book on &quot;Hands-On Machine Learning&quot; and wanted to apply what I learned. I learned about linear regression and support vectors in order to train an ml model. The dataset that I used for this project was the MNIST dataset, which contains thousands of handwritten digits. I also learned about dimensionality reduction to help the efficiency of training the model.  
            </P>
            <br />
            <p>
            To incorporate the model into a project, I added an interface using python that allowed users to draw a digit using their mouse. The image was then pre-processed before being passed to the trained model. Finally the output from the model is passed to the screen.
            </p>
            
            
            
        </Container>
    </Layout>
)

export default Work