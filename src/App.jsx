import { useEffect, useState } from "react";
import Carousel from "./components/Carousel"
import Image from "./components/Image";
import Button from "./components/Button.jsx";
import Bullet from "./components/Bullet.jsx";

import { posts } from "./db/posts.js";

function App() {
  
  const [currentImg, setCurrentImg] = useState(0);
  const [mouseHovering, setMouseHovering] = useState(false);
  
  const commonProps = {
    image: currentImg,
    handler: setCurrentImg,
    length: posts.length - 1,
  };

  
    useEffect(() => {
      if(!mouseHovering){
        const intervalId = setInterval(() => {
            setCurrentImg(img => img === posts.length -1? 0 : img + 1)
        }, 1500);
        return () => clearInterval(intervalId);
      }
    }, [mouseHovering]);


  return (
    <>
    <main id="main">
      <section className="p-5" onMouseEnter={() => setMouseHovering(true)} onMouseLeave={() => setMouseHovering(false)}>
        <Carousel>

          <Button direction={"prev"} {...commonProps}/>

          {posts.map((post,index) => (
              currentImg === index &&
              <Image 
                key={`post-${post.id}`}
                  title={posts[currentImg].title}
              >
                <img src={posts[currentImg].image || "https://placehold.co/600x400"} alt={posts[currentImg].title} />
              </Image>
          ))}

          <Button direction={"next"} {...commonProps}/>

        </Carousel>

      </section>

      <section id="navigation" className="flex items-center gap-x-4">
        {posts.map((post, index) => (
            <Bullet key={`bulletNavigation-${post.id}`} {...commonProps} index={index}/>
        ))}
      </section>

    </main>
    </>
  )
}

export default App
