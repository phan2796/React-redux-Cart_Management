import React, { Component } from 'react';
import Header from './components/Header';
import ProductContainer from './containers/ProductContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';




class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer />
                        <MessageContainer />
                        <CartContainer />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
