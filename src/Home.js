import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <h1 className="home_image">Get your favourite crackers at reasonable cost</h1>
                <div className="home_row">
                    <Product id="1234517" title="Diwali Combo Pack" image="/images/combopack.jpeg" price={1099} rating={4} />
                    <Product id="1234519" title="Puja Samagri" image="/images/puja.jpeg" price={499} rating={4} />
                    <Product id="1234520" title="Special Combo(s)" image="/images/pack.jpeg" price={2999} rating={5} />
                </div>
                <div className="home_row">
                    <Product id="1234510" title="Diwali Bombs" image="/images/bombs.png" price={99} rating={3} />
                    <Product id="1234511" title="Ground Chakra" image="/images/groundchakra.jpeg" price={159} rating={5} />
                    <Product id="1234512" title="Diwali Phuljhari" image="/images/phuljhari.png" price={249} rating={3} />
                    <Product id="1234513" title="3D Fireworks" image="/images/3d.png" price={559} rating={4} />
                </div>
                <div className="home_row">
                    <Product id="1234514" title="Electric Firecrackers" image="/images/electric.png" price={199} rating={5} />
                    <Product id="1234515" title="Lakshmi Bomb" image="/images/lakshmibomb.jpeg" price={399} rating={4} />
                    <Product id="1234516" title="Twinkling Crackers" image="/images/twinkle.png" price={99} rating={3} />
                </div>
                <div className="home_row">
                    <Product id="1234567" title="Diwali Anars" image="/images/anar.png" price={89} rating={4} />       
                    <Product id="1234518" title="Kitkat Fire Crackers" image="/images/kitkat.jpeg" price={299} rating={5} />
                    <Product id="1234568" title="Traditional Pathaka" image="/images/pathaka.png" price={109} rating={5} />
                    <Product id="1234569" title="Diwali Rockets" image="/images/rocket.png" price={299} rating={4} />
                </div>
            </div>
        </div>
    )
}
export default Home
