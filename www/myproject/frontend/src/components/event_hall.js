import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from '../actions';

class EventHall extends Component {

    constructor() {
        super();

        this.renderStandDetails = this.renderStandDetails.bind(this);

        this.state = {
            stand: null
        }
    }

    componentWillMount() {
        this.props.fetchEventHall(this.props.params.id);
    }

    componentWillUnmount() {
        this.props.restoreEvent();
    }

    renderStandDetails(stand) {
        this.setState({ stand });
    }

    closeStandDetails() {
        this.setState({ stand: null });
    }

    handleBooking() {
        const { stand } = this.state;

        browserHistory.push(`/book-stand/${stand.id}`);
    }

    handleDownload(file) {
        window.open('http://172.28.128.10/storage' + file);

    }

    standDetails() {
        if(this.state.stand) {
            const { price, picture } = this.state.stand;
            if(!this.state.stand.booked) {
                return(
                    <div className="center-div stand-details">
                        <button type="button" className="close" aria-label="Close"
                        onClick={this.closeStandDetails.bind(this)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <table className="table">
                          <thead className="thead-inverse">
                            <tr>
                              <th>Price</th>
                              <th>Height</th>
                              <th className="center-th">Image</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">${price}</th>
                              <td>3 m</td>
                              <td><img src={picture} className="img-thumbnail" alt="stand"/></td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <button className="btn btn-success"
                                    onClick={this.handleBooking.bind(this)}>Book Now!</button>
                                </td>
                            </tr>
                        </tbody>
                        </table>

                    </div>
                );
            }
        }
    }
// onClick={() => this.handleDownload(stand.company.marketing_document)} download
    renderStands() {
        const { stands } = this.props.event;
        if(stands) {
            const  root_path = 'http://172.28.128.10/storage';
            const standsList = stands.map((stand) =>
                <div key={stand.id} className="card card-block" onClick={() => this.renderStandDetails(stand)}>
                    {stand.booked ? <div><img className="company-logo" src={root_path+ '/' + stand.company.logo} alt="company logo"/></div> : '' }
                    <div className="price">{stand.booked ? '' : '$' + stand.price}</div>
                    <div>{stand.booked ? <div className="booked">Booked</div> : <div className="free-stand">Free</div>}</div>
                    {stand.booked ? <div className="contact">email: {stand.company.email}</div> : ''}
                    {stand.booked ? <div className="marketing_document">
                    <a className="btn btn-primary" href={root_path + stand.company.marketing_document} download>Marketing Document<i className="fa fa-arrow-circle-down"></i></a> {/*stand.company.marketing_document*/}</div> : ''}
                </div>
            );
            return (
                <div className="stands-list">
                    {standsList}
                </div>
            );
        }
    }

    renderAlert() {
        const { event } = this.props;
          if(event) {
            return (
              <div className="center-div">
              <h3 className="h3-center">Event Details</h3>
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
              </div>
            );
        }
    }

    render() {
        if(this.props.event) {
            return (
                <div className="container stands-div">
                    <h1 className="stands-div-heading">Please select a stand</h1>
                    {/*this.renderAlert()*/}
                    {this.renderStands()}
                    {this.standDetails()}
                </div>
            );
        } else if(this.props.error) {
            return (
                <div className="center-div">
                <h1 className="text-center">404</h1>
                    <strong>Oops! </strong>{this.props.error}
                </div>
            );
        } else {
            return(
                <div className="center-div">
                    Loading...
                </div>
            );
        }
    }

}

function mapStateToPtops(state) {
    return {
        event: state.events.event,
        error: state.events.errorMessage
    };
}

export default connect(mapStateToPtops, actions)(EventHall);
