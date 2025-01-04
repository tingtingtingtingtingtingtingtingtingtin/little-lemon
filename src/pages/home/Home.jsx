import React from "react";
import "./Home.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="landing">
          <div className="text-area">
            <h1>Little Lemon</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              ut ullam voluptatum ratione necessitatibus ducimus numquam nostrum
              recusandae a nihil consequatur obcaecati, nobis vitae officiis
              maiores esse itaque optio tempore?
            </p>
            <NavLink to="/book">
              <button>Reserve a Table</button>
            </NavLink>
          </div>
          <div>
            <img src="" alt="landing-photo" />
          </div>
        </section>
        <section className="specials">
          <span>
            <h1>Specials</h1>
            <button>Online Menu</button>
          </span>
          <span className="cards">
            <Card img="" title="Special 1" text="Some text" />
            <Card img="" title="Special 2" text="Some text" />
            <Card img="" title="Special 3" text="Some text" />
          </span>
        </section>
        <section className="menu">
          <h1>Testimonials</h1>
          <span className="cards">
            <img src="" alt="menu1" />
            <img src="" alt="menu2" />
            <img src="" alt="menu3" />
            <img src="" alt="menu4" />
          </span>
        </section>
        <section className="about">
          <div>
            <h1>Little Lemon</h1>
          </div>
          <div className="overlapped-photos">
            <img src="" alt="photo1" />
            <img src="" alt="photo2" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
