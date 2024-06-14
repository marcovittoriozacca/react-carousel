const Image = ({title, children}) => {

    return(<>
        <div className="border relative">
            <figure>
                {children}
            </figure>
            <div className="absolute bottom-0 w-full px-2 py-7 bg-neutral-600 text-white">
                <h1>{title}</h1>
            </div>
        </div>
    </>)
}
export default Image;