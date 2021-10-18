import React from "react";
import Header from "./components/Header";
import Block from "./components/Block";
import "./components/styles.css";
import Description from "./components/Description";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Modal1 from "./components/Modal1";
import Modal2 from "./components/Modal2";
import InfoBlock from "./components/InfoBlock";
function App() {
  const [pizzas, setPizza] = useState([]);
  const BASE_URL =
    "https://q8zbks9a4l.execute-api.eu-central-1.amazonaws.com/Prod";
  const key = "OwekZi1fkt3VlmA7r20fv6m4jAVLDh6iaF5C41al";
  useEffect(() => {
    fetchPizzas();
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  async function CreateOrder() {
    const response = await fetch(BASE_URL + "/order", {
      method: "POST",
      headers: {
        "x-api-key": key,
      },
      body: JSON.stringify({
        address: "Shevchenka 31",
        pizzas: [{ id: "e95da3f5-3c9c-4e3c-a10a-13fc8092d027", count: 3 }],
        phoneNumber: "+38067777777",
      }),
    });
    const data = await response.json();
    console.log(data);
  }
  async function fetchPizzas() {
    const response = await fetch(BASE_URL + "/pizzas", {
      headers: { "x-api-key": key },
    });
    const data = await response.json();
    setPizza(data);
  }
  return (
    <div>
      <button onClick={CreateOrder}>CreateOrder</button>
      <div className="App">
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>

      <div className="App">
        <button
          className="openModalBtn"
          onClick={() => {
            setModal1Open(true);
          }}
        >
          Open1
        </button>
        {modal1Open && <Modal1 setOpenModal1={setModal1Open} />}
      </div>
      <div className="App">
        <button
          className="openModalBtn"
          onClick={() => {
            setModal2Open(true);
          }}
        >
          Open2
        </button>
        {modal2Open && <Modal2 setOpenModal2={setModal2Open} />}
      </div>
      <div>
        <Header />
        <div id="align-vert">
          <div id="first-row">
            {pizzas.length > 0 ? (
              <Block
                image={pizzas[0].image}
                amount={"450g"}
                length={"30cm"}
                pizza={"Calzone al Forno"}
                description={
                  "tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes."
                }
                price={"180"}
              />
            ) : null}
            <div id="space">
              {pizzas.length > 0 ? (
                <Block
                  image={pizzas[1].image}
                  amount={"480g"}
                  length={"30cm"}
                  pizza={"Diabola"}
                  description={
                    "tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes."
                  }
                  price={"220"}
                />
              ) : null}
            </div>

            <div id="space"></div>
            {pizzas.length > 0 ? (
              <Block
                image={pizzas[2].image}
                amount={"430g"}
                length={"30cm"}
                pizza={"Peperoni"}
                description={
                  "tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes."
                }
                price={"195"}
              />
            ) : null}
          </div>
          <div id="second-row">
            {pizzas.length > 0 ? (
              <Block
                image={pizzas[3].image}
                amount={"500g"}
                length={"30cm"}
                pizza={"Hawaii"}
                description={
                  "tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes."
                }
                price={"165"}
              />
            ) : null}
            <div id="space">
              {pizzas.length > 0 ? (
                <Block
                  image={pizzas[4].image}
                  amount={"420g"}
                  length={"30cm"}
                  pizza={"Capricciosa"}
                  description={
                    "tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes."
                  }
                  price={"157"}
                />
              ) : null}
            </div>
            <div id="space">
              {pizzas.length > 0 ? (
                <Block
                  image={pizzas[5].image}
                  amount={"435g"}
                  length={"30cm"}
                  pizza={"Quattro Formaggi"}
                  description="tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes."
                  price={"188"}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
