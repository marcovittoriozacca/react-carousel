const Image = ({title, children}) => {

    return(<>
        <div className="carouselImageWrapper">
            <figure>
                {children}
            </figure>
            <div className="carouselImage">
                <h1>{title}</h1>
            </div>
        </div>
    </>)
}
export default Image;