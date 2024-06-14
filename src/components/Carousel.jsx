const Carousel = ({children}) => {
    return(
        <>
            <section id="carousel-image" className="carouselWrapper">
                {children}
            </section>
        </>
    )
}
export default Carousel;