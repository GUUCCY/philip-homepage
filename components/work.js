import { Heading, Box, Image, Badge } from '@chakra-ui/react'


export const Title = ({ children }) => (
    <Box>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="purple" mr={2}>
        {children}
    </Badge>
)