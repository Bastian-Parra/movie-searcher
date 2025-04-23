import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieCard } from "./MovieCard";

export const CarouselComponent = ({ movies = [] }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies to display</div>;
  }
  return (
    <Carousel
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4, 
          slidesToSlide: 4, 
          partialVisible: false, 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      }}
      containerClass="carousel-container"
      itemClass="carousel-item"
      infinite={true}
      showDots={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      centerMode={false}
    >
      {movies?.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </Carousel>
  );
};
