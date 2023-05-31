import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      restaurants: []
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const zip = this.state.zipcode;

    // Use Google Places API to get a list of places near the user's zip code
    // fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${zip}&key=${process.env.GOOGLE_PLACES_API_KEY}`)
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${zip}&key=AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc`)
      .then(res => res.json())
      .then(data => {
        let restaurants = data.results;
        if (restaurants.length > 0) {
          // Choose a random restaurant from the list
          const index = Math.floor(Math.random() * restaurants.length);
          const restaurant = restaurants[index];

          // Store the restaurant information in state
          this.setState({
            restaurants: [{ name: restaurant.name, website: restaurant.website, address: restaurant.formatted_address }]
          });
        }
      })
  }

  render() {
    return (
      <div className="container">
        <h2>Shuffle Restaurant</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="zipcode">Zip Code:</label>
          <input type="text" id="zipcode" value={this.state.zipcode} onChange={event => this.setState({ zipcode: event.target.value })} />
          <button className="btn" type="submit">Shuffle</button>
        </form>
        {this.state.restaurants.map((restaurant, index) => (
          <div key={index}>
            <h4><a href={restaurant.website} target="_blank">{restaurant.name}</a></h4>
            <p>{restaurant.address}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
