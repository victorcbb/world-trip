import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "Swiper"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css"
import { Heading, Image, Link, Stack, Text } from "@chakra-ui/react"

export function ContinentsSlide() {

  return (
    <Swiper modules={[Navigation, Pagination]} navigation={true} pagination={{ clickable: true }} className="mySwiper">
      <SwiperSlide>
        <Link href="/europe" _hover={{textDecoration: "none"}}>
          <Image src="europe/ContinentImage.png" alt="imagem de cidade por cima" />
          <Stack>
            <Heading as="h3" fontSize="5xl">Europa</Heading>
            <Text as="p" fontSize="2xl" fontWeight="bold">O continente mais antigo.</Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="/europe" _hover={{textDecoration: "none"}}>
          <Image src="europe/ContinentImage.png" alt="imagem de cidade por cima" />
          <Stack>
            <Heading as="h3" fontSize="5xl">Europa</Heading>
            <Text as="p" fontSize="2xl" fontWeight="bold">O continente mais antigo.</Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
                <Link href="/europe" _hover={{textDecoration: "none"}}>
          <Image src="europe/ContinentImage.png" alt="imagem de cidade por cima" />
          <Stack>
            <Heading as="h3" fontSize="5xl">Europa</Heading>
            <Text as="p" fontSize="2xl" fontWeight="bold">O continente mais antigo.</Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
                <Link href="/europe" _hover={{textDecoration: "none"}}>
          <Image src="europe/ContinentImage.png" alt="imagem de cidade por cima" />
          <Stack>
            <Heading as="h3" fontSize="5xl">Europa</Heading>
            <Text as="p" fontSize="2xl" fontWeight="bold">O continente mais antigo.</Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
                <Link href="/europe" _hover={{textDecoration: "none"}}>
          <Image src="europe/ContinentImage.png" alt="imagem de cidade por cima" />
          <Stack>
            <Heading as="h3" fontSize="5xl">Europa</Heading>
            <Text as="p" fontSize="2xl" fontWeight="bold">O continente mais antigo.</Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
                <Link href="/europe" _hover={{textDecoration: "none"}}>
          <Image src="europe/ContinentImage.png" alt="imagem de cidade por cima" />
          <Stack>
            <Heading as="h3" fontSize="5xl">Europa</Heading>
            <Text as="p" fontSize="2xl" fontWeight="bold">O continente mais antigo.</Text>
          </Stack>
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}