import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Carousel() {
    const images = [
        {
            title: "The Godfather",
            image: "https://image.tmdb.org/t/p/original/vJ8H8skNbNzXWVyDNSgxTZMTPA6.jpg",
        },
        {
            title: "Se7en",
            image: "https://image.tmdb.org/t/p/original/hWrxRwnnisPE4LJdER3FmdeM39b.jpg",
        },
        {
            title: "The Pianist",
            image: "https://image.tmdb.org/t/p/original/cqOmm81h5zVl182kzbr0xSKD6nF.jpg",
        },
        {
            title: "Shutter Island",
            image: "https://image.tmdb.org/t/p/original/lavdyiJWciCJvyLG37ZOs6HJijg.jpg",
        },
        {
            title: "Taxi Driver",
            image: "https://image.tmdb.org/t/p/original/9uddYYTNcLWpzUkl5iw1RUYhLhY.jpg",
        },
    ];
    const [index, setIndex] = useState(0);
    const handleIndexIncrement = () => setIndex((i) => i + 1);
    const handleIndexDecrement = () => setIndex((i) => i - 1);

    useEffect(() => {
        const timeout = setTimeout(handleIndexIncrement, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [index]);
    if (index >= images.length) return setIndex(0);
    if (index < 0) return setIndex(images.length - 1);

    return (
        <>
            <div style={{ display: "flex" }}>
                <img src={images[index].image} alt="" />
                <p>{images[index].title}</p>
            </div>
            <p>Movie title</p>
        </>
    );
}

Carousel.propTypes = {
    index: PropTypes.number,
};

export default Carousel;
