import React from "react";
import "../css/Home.css";
import Products from "./Products";

//
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbx_8YvUtIWoZ-Dn8qSyF5WHF5QI04a6Nkmu3Jr8sMveDJa983bk21WAvY1BQjrXnJ_o&usqp=CAU"
          className="home_img"
          alt=""
        />

        <div className="home_row">
          <Products
            image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores."}
            price={190}
            rating={3}
            id={1}
          />
          
          <Products
            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-tv-brands-1587581394.png?crop=0.561xw:0.862xh;0.220xw,0.0887xh&resize=640:*"
            title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores."}
            price={200.0}
            rating={3}
            id={2}
          />
        </div>
        <div className="home_row">
          <Products
            image="https://5.imimg.com/data5/DP/EE/BO/SELLER-603395/bluetooth-smart-watch-500x500.jpg"
            title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores."}
            price={30.0}
            rating={3}
            id={3}
          />
          <Products
            image="https://i.ytimg.com/vi/F5Zi-Dh43PE/maxresdefault.jpg"
            title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores."}
            price={300.0}
            rating={3}
            id={4}
          />
          <Products
            image="https://images.sunglasshut.com/resource/blob/198944/5ab1120478150271afb0a4806cd7588c/4-custom-clubmaster-data.jpg"
           title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores."}
            price={40.0}
            rating={3}
            id={5}
          />
        </div>
        <div className="home_row">
          <Products
            image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/022605/01/fnd/EEA/fmt/png/Suisse-DNA-Football-Cap"
           title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolores."}
            price={15.0}
            rating={3}
            id={6}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
