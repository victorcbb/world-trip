import { Image, Flex } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex as="header" w="100%" h="6.25rem" align="center">
      <Image src="./logo.svg" alt="" mx="auto" />
    </Flex>
  )
}