import { useState } from "react";
import Carousel from "./components/Carousel"
import Image from "./components/Image";

import { posts } from "./db/posts.js";

function App() {

  const [currentImg, setCurrentImg] = useState(0);

  return (
    <>
      <Carousel>
        {posts.map((post,index) => (
            currentImg === index &&
            <Image 
              key={`post-${post.id}`}
                title={posts[currentImg].title}
            >
              <img src={posts[currentImg].image || "https://placehold.co/600x400"} alt={posts[0].title} />
            </Image>
        ))}
      </Carousel>
    </>
  )
}

export default App
