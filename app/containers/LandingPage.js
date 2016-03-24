import React, { Component } from 'react';
import Signin from './Signin';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCredentials: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // jQuery
  componentDidMount() {
    $('.ui.sticky').sticky({
      context: '#stuck',
    });
  }
  handleClick() {
    this.setState({ showCredentials: !!!this.state.showCredentials });
  }
  render() {
    const style = {
      width: '100%',
      height: '500',
      'background-color': 'gray',
    };
    return (
    <div className="ui compact" id="stuck">      
      <div onClick={this.handleClick} className="ui sticky">
        <h1 style={{ textAlign: 'center', color: 'blue' }} >
          Signin -  Create Account
        </h1>
        {this.state.showCredentials ? <Signin /> : null}
      </div>
      <iframe src="" style={style}></iframe>
        <br></br>
        <p>Soufflé cookie caramels chupa chups tiramisu chupa chups marshmallow tart. Chocolate sugar plum marzipan croissant jelly-o marshmallow sugar plum. Liquorice tiramisu danish. Sugar plum pie tootsie roll sweet roll chocolate cake cheesecake. Bonbon jujubes jelly jelly beans dragée lemon drops. Soufflé cookie lollipop chupa chups topping. Marshmallow cake wafer sugar plum. Donut gingerbread pudding marshmallow sesame snaps. Tootsie roll chocolate sweet roll apple pie pastry candy. Soufflé soufflé cookie jelly muffin wafer sweet. Marshmallow marzipan liquorice candy sweet biscuit liquorice caramels sesame snaps. Biscuit halvah cheesecake bonbon.</p>
        <br></br>
        <p>Gingerbread tootsie roll fruitcake jelly. Croissant gummies donut cupcake cheesecake dessert dragée brownie. Danish gummies donut ice cream chocolate cake gingerbread brownie. Gummies cotton candy jelly beans cotton candy sweet roll. Jelly-o lemon drops sugar plum. Toffee sugar plum lemon drops. Pudding sweet roll cotton candy muffin. Tootsie roll chocolate cake carrot cake lollipop. Sugar plum sweet chocolate bar gummi bears chocolate cake liquorice donut chocolate cake. Bear claw candy chupa chups tootsie roll chocolate bar cookie chocolate. Cake chocolate bar apple pie pie apple pie bear claw sugar plum marshmallow. Sesame snaps cake liquorice cookie pudding. Cake sesame snaps candy cheesecake pudding donut cookie bonbon apple pie. Marzipan candy sweet brownie cotton candy jujubes chocolate cake bonbon.</p>
        <br></br>
        <p>Chocolate cake soufflé fruitcake bonbon bonbon chupa chups oat cake toffee. Jujubes cookie gummies powder macaroon jujubes biscuit. Soufflé soufflé chocolate cake croissant brownie topping chocolate cake chocolate bar tiramisu. Topping croissant candy canes chocolate cake tootsie roll. Dessert gummies icing dessert chupa chups. Cake cheesecake candy dragée. Sweet roll candy canes bear claw oat cake cupcake dragée. Pudding lemon drops sweet chupa chups sweet roll. Sweet roll pastry fruitcake sweet. Dessert muffin cookie candy cheesecake lemon drops. Gingerbread pie tootsie roll lemon drops chocolate bar chocolate. Bonbon croissant tart bear claw oat cake marzipan macaroon.</p>
        <br></br>
        <p>Gingerbread oat cake ice cream jelly sugar plum cupcake. Gummi bears soufflé carrot cake liquorice topping tiramisu sweet. Cake chocolate muffin toffee topping soufflé cotton candy pie. Jelly-o dragée cookie pie fruitcake croissant muffin macaroon marshmallow. Caramels marshmallow sweet bonbon topping.</p>
        <br></br>
        <p>Chocolate cake soufflé fruitcake bonbon bonbon chupa chups oat cake toffee. Jujubes cookie gummies powder macaroon jujubes biscuit. Soufflé soufflé chocolate cake croissant brownie topping chocolate cake chocolate bar tiramisu. Topping croissant candy canes chocolate cake tootsie roll. Dessert gummies icing dessert chupa chups. Cake cheesecake candy dragée. Sweet roll candy canes bear claw oat cake cupcake dragée. Pudding lemon drops sweet chupa chups sweet roll. Sweet roll pastry fruitcake sweet. Dessert muffin cookie candy cheesecake lemon drops. Gingerbread pie tootsie roll lemon drops chocolate bar chocolate. Bonbon croissant tart bear claw oat cake marzipan macaroon.</p>
        <iframe src="" style={style}></iframe>
        <h1 style={{ textAlign: 'center' }} > ABOUT US </h1>
        <p>Gingerbread oat cake ice cream jelly sugar plum cupcake. Gummi bears soufflé carrot cake liquorice topping tiramisu sweet. Cake chocolate muffin toffee topping soufflé cotton candy pie. Jelly-o dragée cookie pie fruitcake croissant muffin macaroon marshmallow. Caramels marshmallow sweet bonbon topping.Gingerbread oat cake ice cream jelly sugar plum cupcake. Gummi bears soufflé carrot cake liquorice topping tiramisu sweet. Cake chocolate muffin toffee topping soufflé cotton candy pie. Jelly-o dragée cookie pie fruitcake croissant muffin macaroon marshmallow. Caramels marshmallow sweet bonbon topping.</p>
        <br></br>
      </div>
    );
  }

}
export default LandingPage;