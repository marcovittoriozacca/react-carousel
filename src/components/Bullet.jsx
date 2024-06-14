const Bullet = ({image, handler, index}) => {

    return(
        <div className={`bulletNavigation ${image === index? "activeBullet" : ""}`} onClick={() => handler(img => image = index)}></div>
    )

}
export default Bullet;