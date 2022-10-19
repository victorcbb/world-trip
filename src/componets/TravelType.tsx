import { Stack, Image, Text, useBreakpointValue, Icon } from "@chakra-ui/react"
import { GoPrimitiveDot } from "react-icons/go"

interface TravelTypeProps {
  image?: string
  type: string
}

export function TravelType({ image, type }: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isMobile) {
    return (
      <Stack spacing="2" direction="row" align="center">
        <Icon as={GoPrimitiveDot} w="16px" h="16px" color="brand.highlight" />
        <Text
          fontWeight="semibold"
          lineHeight="150%"
          fontSize="lg"
        >
          {type}
        </Text>
      </Stack>
    )
  }

  return (
    <Stack spacing="6" alignItems="center">
      <Image src={image} alt="" boxSize="85px" />
      <Text
        fontWeight="semibold"
        lineHeight="150%"
        fontSize="2xl"
      >
        {type}
      </Text>
    </Stack>
  )
}