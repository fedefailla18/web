import React from 'react';
import { Component } from 'react';
import {  Container, Image, Jumbotron } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

class Menu extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="background-image" style={{ backgroundImage: "url(/assets/h_telma.png)" }} /> 
                <Jumbotron fluid className="jumbo" />

                <div class="container">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="menu-item">
                                           <div class="menu-item-details">
                                               <div class="menu-item-desc"><a href="#" class="image-popup">Grill Salmont</a></div>
                                               <div class="menu-item-dot"></div>
                                               <div class="menu-item-prices">
                                                   <div class="menu-item-price">$46</div>
                                               </div>
                                           </div>
                                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                       </div>
                                        <div class="menu-item">
                                           <div class="menu-item-details">
                                               <div class="menu-item-desc"><a href="#" class="image-popup">Lemon Meringue  </a></div>
                                               <div class="menu-item-dot"></div>
                                               <div class="menu-item-prices">
                                                   <div class="menu-item-price">$32</div>
                                               </div>
                                           </div>
                                           <p>Quibusdam sapiente delectus vitae aspernatur, suscipit tempora</p>
                                       </div>
                                        <div class="menu-item">
                                           <div class="menu-item-details">
                                               <div class="menu-item-desc"><a href="#" class="image-popup">Fried Potatoes  </a></div>
                                               <div class="menu-item-dot"></div>
                                               <div class="menu-item-prices">
                                                   <div class="menu-item-price">$62</div>
                                               </div>
                                           </div>
                                           <p> rerum non dolorem doloribus ipsa, neque quis id nam iure </p>
                                       </div>
               <div class="menu-item">
                                           <div class="menu-item-details">
                                               <div class="menu-item-desc"><a href="#" class="image-popup">Miso chicken  </a></div>
                                               <div class="menu-item-dot"></div>
                                               <div class="menu-item-prices">
                                                   <div class="menu-item-price">$15</div>
                                               </div>
                                           </div>
                                           <p>optio reprehenderit. Atque voluptatem, iure.</p>
                                       </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Menu;
