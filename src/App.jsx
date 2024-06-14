import { useState } from "react";
import Carousel from "./components/Carousel"
import Image from "./components/Image";

import { posts } from "./db/posts.js";

function App() {

  const [currentImg, setCurrentImg] = useState(0);

  const next = () => {
    return setCurrentImg((img) =>{ 
      if(img >= posts.length - 1){
        return img = 0;
      }
      return img + 1
    })
  }
  const prev = () => {
    return setCurrentImg((img) =>{ 
      if(img <= 0){
        return img = posts.length - 1;
      }
      return img - 1
    })
  }

  return (
    <>
      <Carousel>
      <button onClick={prev}>Prev</button>
        {posts.map((post,index) => (
            currentImg === index &&
            <Image 
              key={`post-${post.id}`}
                title={posts[currentImg].title}
            >
              <img src={posts[currentImg].image || "https://placehold.co/600x400"} alt={posts[currentImg].title} />
            </Image>
        ))}
        <button onClick={next}>Next</button>
      </Carousel>
    </>
  )
}

export default App
