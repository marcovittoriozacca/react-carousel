const Carousel = ({children}) => {
    return(
        <>
            <section id="carousel-image" className="h-screen grid place-items-center">
                {children}
            </section>
        </>
    )
}
export default Carousel;