import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <h1 className="home_image">Get your favourite crackers at reasonable cost</h1>
                <div className="home_row">
                    <Product title="Diwali Anars" image="/images/anar.png" price={89} rating={4} />
                    <Product title="Traditional Pathaka" image="/images/pathaka.png" price={109} rating={5} />
                    <Product title="Diwali Rockets" image="/images/rocket.png" price={299} rating={4} />
                </div>
                <div className="home_row">
                    <Product title="Diwali Bombs" image="/images/bombs.png" price={99} rating={3} />
                    <Product title="Ground Chakra" image="/images/groundchakra.jpeg" price={159} rating={5} />
                    <Product title="Diwali Phuljhari" image="/images/phuljhari.png" price={249} rating={3} />
                    <Product title="3D Fireworks" image="/images/3d.png" price={559} rating={4} />
                </div>
                <div className="home_row">
                    <Product title="Electric Firecrackers" image="/images/electric.png" price={199} rating={5} />
                    <Product title="Lakshmi Bomb" image="/images/lakshmibomb.jpeg" price={399} rating={4} />
                    <Product title="Twinkling Crackers" image="/images/twinkle.png" price={99} rating={3} />
                </div>
                <div className="home_row">
                    <Product title="Diwali Combo Pack" image="/images/combopack.jpeg" price={1099} rating={4} />
                    <Product title="Kitkat Fire Crackers" image="/images/kitkat.jpeg" price={299} rating={5} />
                    <Product title="Puja Samagri" image="/images/puja.jpeg" price={499} rating={4} />
                    <Product title="Special Combo(s)" image="/images/pack.jpeg" price={2999} rating={5} />
                </div>
            </div>
        </div>
    )
}
export default Home
