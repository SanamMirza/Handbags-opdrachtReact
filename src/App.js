import React from 'react';
import './App.css';
import handybag from './assets/bag_1.png';
import stylishbag from './assets/bag_2.png';
import simplebag from './assets/bag_3.png';
import trendybag from './assets/bag_4.png';
import theBrand from './assets/brand.png';
import ourStory from './assets/our_story.png';
import Buttons from "./components/Buttons";
import Product from "./components/Product";
import Tile from "./components/Tile";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Buttons click={() =>console.log("to the collection")}> to the collection</Buttons>
        <Buttons click={() =>console.log("all bags")}> all bags</Buttons>
        <Buttons toBeDisabled={true} click={() =>console.log("pre-order")} > pre-order</Buttons>
      </nav>

          <main>
              <Product
                  headline="Best seller"
                  image={handybag}
                  description="The handy bag"
                  price="€400,-"
              />
              <Product
                  headline="Best seller"
                  image={stylishbag}
                  description="The stylish bag"
                  price="€250,-"
              />
              <Product
                  headline="Best seller"
                  image={simplebag}
                  description="The simple bag"
                  price="€300,-"
              />
              <Product
                  headline="Best seller"
                  image={trendybag}
                  description="The trendy bag"
                  price="€150,-"
              />
          </main>
          <footer>
              <Tile
                  title="The Brand"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio dolores, ea earum esse impedit magnam minima nam natus tempora."
                  children="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorum itaque iure odio officia qui quibusdam, repellat sit suscipit veritatis!"
              />
              <Tile
                  image={theBrand}
              />

              <Tile
                 image={ourStory}
              />
              <Tile
                  title="Our Story"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquam aperiam asperiores eum facere id illo incidunt labore minus molestias neque pariatur quo reprehenderit tempora!"
              />
          </footer>
      </>
  );
}

export default App;



