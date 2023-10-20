import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            deserunt odit non doloribus exercitationem ad soluta optio, sint in
            eius corrupti saepe id amet ea obcaecati at a iure reprehenderit.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                key={pizza.name}
                name={pizza.name}
                ingredient={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>we're still working on our menu</p>
      )}
    </main>
  );
}

function Pizza({ name, ingredient, photoName, price, soldOut }) {
  // if (soldOut) return null;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="pizza img" />
      <h3>{name}</h3>
      <p>{ingredient}</p>
      <span>{soldOut ? "Sold OUT" : price}</span>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // return React.createElement("footer", null, "We're currently open");
  // if (hour >= openHour && hour <= closeHour) return "We're currently open";
  // else alert("Sorry we are closed");

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : <p>Tahnk you</p>}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're Open until {closeHour}:00</p>
      <button className="btn">Order</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
