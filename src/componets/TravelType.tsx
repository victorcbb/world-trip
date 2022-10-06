import { Stack, Image, Text } from "@chakra-ui/react"

interface TravelTypeProps {
  image: string
  type: string
}

export function TravelType({ image, type }: TravelTypeProps) {
  return (
    <Stack spacing="6" alignItems="center">
      <Image src={image} alt="" boxSize="85px" />
      <Text 
        fontWeight="semibold" 
        lineHeight="150%"
        fontSize="1.5rem"
      >
        {type}
      </Text>
    </Stack>
  )
}