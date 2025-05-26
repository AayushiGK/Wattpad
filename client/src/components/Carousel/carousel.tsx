import "./carousel.css";
import * as banners from "../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const images = Object.entries(banners);

const Carousel = () => {
    const navigation = useNavigate();
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const goToIndex = (index: number) => setCurrent(index);
    const goToPrev = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    const goToNext = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));

    const handleImageClick = (image: any) => {
        const tag = image[0]; // madamSir, maddamSir, etc.
        return navigation(`/stories/${tag}`);
    }

    return (
        <div className="carousel">
            <button className="carousel-arrow left" onClick={goToPrev} aria-label="Previous">&lt;</button>
            <img className="carousel-img" src={images[current][1] as string} alt={images[current][0]} onClick={() => handleImageClick(images[current])} />
            <button className="carousel-arrow right" onClick={goToNext} aria-label="Previous">&gt;</button>
            <div className="carousel-dots">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`carousel-dot${idx === current ? " active" : ""}`}
                        onClick={() => goToIndex(idx)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel;