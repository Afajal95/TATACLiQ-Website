import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://assets.tatacliq.com/medias/sys_master/images/10963640156190.jpg" alt="" />
          <div className="home_row">
           <Product
           id="121121"
           title="The Power of Your Subconcious Mind"
           price={50}
           rating={5}
           image="https://rukminim1.flixcart.com/image/612/612/book/6/4/8/the-power-of-your-subconscious-mind-original-imaeh8yjmfmupqdv.jpeg?q=70" alt="" />
           
           <Product className="product"
           id="121122"
           title="Abstract Men Hooded Neck Dark Blue T-Shirt"
           price={70}
           rating={5}
           image="https://rukminim1.flixcart.com/image/324/389/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=50" alt="" />
       </div>
       <div className="home_row">
           
       <Product
           id="121123"
           title="Fashion String 214 cm (7 ft) Polyester Door Curtain"
           price={40}
           rating={5}
           image="https://rukminim1.flixcart.com/image/612/612/jfmuw7k0/curtain/q/5/g/kolaveri-153-fs2pc000323wd-eyelet-fashion-string-original-imaf4fvvgbkxy6s4.jpeg?q=70" alt="" />
           
           <Product
           id="121124"
           title="Bluewud Victor Engineered Wood TV Entertainment Unit"
           price={120}
           rating={5}
           image="https://rukminim1.flixcart.com/image/352/352/jwaztzk0/tv-entertainment-unit/t/w/f/particle-board-tu-vc-w-bluewud-wenge-original-imaety3pajaghs8z.jpeg?q=70" alt="" />

           <Product
           id="121125"
           title="Vivo V20 (Sunset Melody, 128 GB)  (8 GB RAM)"
           price={320}
           rating={5}
           image="https://rukminim1.flixcart.com/image/352/352/kfikya80/mobile/2/a/k/vivo-v20-v2025-pd2039f-in-original-imafvymfchzgyykh.jpeg?q=70" alt="" />
       </div>

       <div className="home_row">
       <Product
           id="121126"
           title="Samsung 138cm (55 inch) Ultra HD (4K) LED Smart TV with Voice Search"
           price={650}
           rating={5}
           image="https://rukminim1.flixcart.com/image/352/352/kbl4cy80/television/j/e/n/samsung-ua55tue60fkxxl-original-imafswfrpmhx8erz.jpeg?q=70" alt="" />
       
     </div>

    </div>
    );
}

export default Home;
