const Carousel = ({children}) => {
    return(
        <>
            <section id="carousel-image" className="h-screen flex items-center justify-center gap-x-10">
                {children}
            </section>
        </>
    )
}
export default Carousel;