import React from 'react';
import Header from './components/Header';
import Block from './components/Block';
import './components/styles.css';
import Description from './components/Description';
function App() {
  return (<div>
          <Header/>
          <div id="align-vert">
          <div id="first-row"><Block image={'/images/pizza1.png'} amount={'450g'} length={'30cm'}
          pizza={'Calzone al Forno'} description={'tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes.'} price={'180'}/>
          <div id="space"><Block image={'/images/pizza2.png'} amount={'480g'} length={'30cm'} 
          pizza={'Diabola'} description={'tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes.'}  price={'220'}/></div>
          <div id="space"></div><Block image={'/images/pizza3.png'} amount={'430g'} length={'30cm'}
          pizza={'Peperoni'} description={'tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes.'} price={'195'}/></div>
          <div id="second-row"><Block image={'/images/pizza4.jpg'} amount={'500g'} length={'30cm'}
          pizza={'Hawaii'} description={'tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes.'}  price={'165'}/>
          <div id="space"><Block image={'/images/pizza5.jpg'} amount={'420g'} length={'30cm'}
          pizza={'Capricciosa'} description={'tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes.'} price={'157'}/></div>
          <div id="space"><Block image={'/images/pizza6.jpg'} amount={'435g'} length={'30cm'}
          pizza={'Quattro Formaggi'} description='tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes.' price={'188'}/></div>
          </div>
          </div>
          </div>)
          
}

export default App;
