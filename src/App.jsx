import { useState } from "react";
import Carousel from "./components/Carousel"
import Image from "./components/Image";
import Button from "./components/Button.jsx";

import { posts } from "./db/posts.js";

function App() {

  const [currentImg, setCurrentImg] = useState(0);

  const commonProps = {
    image: currentImg,
    handler: setCurrentImg,
    length: posts.length - 1,
  };

  return (
    <>
    <main id="main">
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
    </main>
    </>
  )
}

export default App
