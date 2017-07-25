// src/components/WorldMap.js

import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import { connect } from 'react-redux';
import * as actions from '../actions';
import { browserHistory } from 'react-router';
class WorldMap extends Component {
    componentWillMount() {
        this.props.fetchEvents();
    }
  constructor() {
    super()
    this.state = {
      worlddata: [],
      event: null
    }

    this.handleMarkerClick = this.handleMarkerClick.bind(this)
  }
  projection() {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }

  handleMarkerClick(markerIndex) {
    // console.log("Marker: ", this.props.events[markerIndex]);
    this.setState({
        event: this.props.events[markerIndex]
    });
  }

    handleReservation() {
        const { id } = this.state.event;

        browserHistory.push(`/events/${id}`);
    }

    renderAlert() {
        const { event } = this.state;
          if(event) {
            return (
              <div className="center-div reserve">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Location</th>
                      <th>Event Dates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{event.name}</th>
                      <td>{event.city}</td>
                      <td>11/11/2017</td>
                    </tr>
                </tbody>
                </table>
                <button className="btn reserve-btn" onClick={this.handleReservation.bind(this)}>
                    Book Your Place
                </button>
              </div>
            );
      } else {
          return (
              <div className="center-div reserve">
                Please choose one of the events displayed on the map
              </div>
          );
      }
    }

  componentDidMount() {
    fetch("https://unpkg.com/world-atlas@1.1.4/world/110m.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          this.setState({
            worlddata: feature(worlddata, worlddata.objects.countries).features,
        });
      });
    });
  }

      render() {
        if (this.props.events) {
        return (
            <div className="responsive-svg">
                  <svg viewBox="0 0 800 450">
                    <g className="countries">
                      {
                        this.state.worlddata.map((d,i) => (
                          <path
                            key={ `path-${ i }` }
                            d={ geoPath().projection(this.projection())(d) }
                            className="country"
                            fill={ `rgba(38,50,56,${ 1 / this.state.worlddata.length * i})` }
                            stroke="#FFFFFF"
                            strokeWidth={ 0.5 }
                          />
                        ))
                      }
                    </g>
                    <g className="markers">
                      {
                        this.props.events.map((ev, i) => (
                          <circle
                            key={ `marker-${i}` }
                            cx={ this.projection()(ev.coordinates.split(","))[0] }
                            cy={ this.projection()(ev.coordinates.split(","))[1] }
                            r={ 15 }
                            fill="#E91E63"
                            stroke="#FFFFFF"
                            className="marker"
                            onClick={ () => this.handleMarkerClick(i) }
                          />
                        ))
                      }
                    </g>
                  </svg>
                  {this.renderAlert()}
            </div>
        );
    } else {
        return (
            <div className="center-div">Loading...</div>
        );
        }
    }
}

function mapStateToPtops(state) {
    return {
        events: state.events.events
    };
}

export default connect(mapStateToPtops, actions)(WorldMap);
