import Carousel from "./components/Carousel"
import Image from "./components/Image";

import { posts } from "./db/posts.js";

function App() {

  return (
    <>
      <Carousel>
          <Image 
              title={posts[0].title}
          >
            <img src={posts[0].image || "https://placehold.co/600x400"} alt={posts[0].title} />
          </Image>
      </Carousel>
    </>
  )
}

export default App
