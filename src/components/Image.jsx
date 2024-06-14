const Image = ({title, children}) => {

    return(<>
        <div className="carouselImageWrapper">
            <figure className="carouselFigure">
                {children}
            </figure>
            <div className="carouselTitle">
                <h1>{title}</h1>
            </div>
        </div>
    </>)
}
export default Image;