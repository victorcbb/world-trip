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
        <Link href="/europe" _hover={{ textDecoration: "none" }}>
          <Image src="europe/continentImage.png" alt="imagem de cidade por cima" />
          <Stack>
            <Heading as="h3" fontSize={["xl", "5xl"]}>Europa</Heading>
            <Text as="p" fontSize={["sm", "2xl"]} fontWeight="bold">
              O velho mundo.
            </Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/north" _hover={{ textDecoration: "none" }}>
          <Image
            src="northAmerica/continentImage.jpg"
            alt="imagem de cidade"
            filter='auto'
            brightness='40%'
          />
          <Stack>
            <Heading as="h3" fontSize={["xl", "5xl"]}>América do Norte</Heading>
            <Text as="p" fontSize={["sm", "2xl"]} fontWeight="bold">
              O norte do novo mundo.
            </Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/south" _hover={{ textDecoration: "none" }}>
          <Image
            src="southAmerica/continentImage.jpg"
            alt="imagem de cidade por cima"
            filter='auto'
            brightness='40%'
          />
          <Stack>
            <Heading as="h3" fontSize={["xl", "5xl"]}>América do Sul</Heading>
            <Text as="p" fontSize={["sm", "2xl"]} fontWeight="bold">
              O sul do novo mundo.
            </Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/asia" _hover={{ textDecoration: "none" }}>
          <Image
            src="europe/ContinentImage.png"
            alt="imagem de cidade por cima"
            filter='auto'
            brightness='40%'
          />
          <Stack>
            <Heading as="h3" fontSize={["xl", "5xl"]}>Asia</Heading>
            <Text as="p" fontSize={["sm", "2xl"]} fontWeight="bold">
              O continente das antigas civilizações.
            </Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/africa" _hover={{ textDecoration: "none" }}>
          <Image
            src="africa/ContinentImage.jpg"
            alt="imagem de savan"
            filter='auto'
            brightness='40%'
          />
          <Stack>
            <Heading as="h3" fontSize={["xl", "5xl"]}>África</Heading>
            <Text as="p" fontSize={["sm", "2xl"]} fontWeight="bold">
              O berço da humanidade.
            </Text>
          </Stack>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/oceania" _hover={{ textDecoration: "none" }}>
          <Image
            src="oceania/ContinentImage.jpg"
            alt="imagem de cidade por cima"
            filter='auto'
            brightness='40%'
          />
          <Stack>
            <Heading as="h3" fontSize={["xl", "5xl"]}>Oceania</Heading>
            <Text as="p" fontSize={["sm", "2xl"]} fontWeight="bold">
              O novíssimo continente.
            </Text>
          </Stack>
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}