import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class BookStand extends Component {
    constructor() {
        super();

        this.state = {
            email: null,
            admin: null,
            marketing_document: null,
            logo: null
        };
    }

    renderAlert() {
        if(this.props.errorMessage) {
            const errorList = (_.values(this.props.errorMessage))
                                .map((value) => <li key={value[0]}>- {value[0]}</li>);

            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong>
                    {errorList}
                </div>
            );
        }
    }

    handleFormSubmit({email, admin}) {
        this.setState({ email, admin });

        this.props.bookStand(this.state, this.props.params.id);
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }

    onChangeAdmin(e) {
        this.setState({ admin: e.target.value });
    }

    onChangeLogo(e) {
        this.setState({ logo: e.target.files[0] });
    }

    onChangeMarketingDocument(e) {
        this.setState({ marketing_document: e.target.files[0] });
    }

    render() {
        const { handleSubmit, fields: { email, admin, marketing_document, logo } } = this.props;
        return (
            <div className="container">
                <div className="center-div">
                <h3 className="form-heading">Book Stand</h3>
                <hr/>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} encType="multipart/form-data">
                    <fieldset className="form-group">
                        <label>Email:</label>
                        <input {...email} type="text" className="form-control" onBlur={this.onChangeEmail.bind(this)}/>
                    {email.touched && email.error &&<div className="error">{email.error}</div>}
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Admin Name:</label>
                        <input {...admin} type="text" className="form-control" onBlur={this.onChangeAdmin.bind(this)}/>
                        {admin.touched && admin.error &&<div className="error">{admin.error}</div>}
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Marketing Document:</label>
                        <input
                        value={marketing_document.value}
                        type="file"
                        className="form-control"
                        onChange={this.onChangeMarketingDocument.bind(this)}/>
                        {marketing_document.touched && marketing_document.error &&<div className="error">{marketing_document.error}</div>}
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Company Logo:</label>
                        <input value={logo.value}
                        type="file"
                        className="form-control"
                        onChange={this.onChangeLogo.bind(this)}
                        />
                        {logo.touched && logo.error &&<div className="error">{logo.error}</div>}
                    </fieldset>
                    <div>
                        {this.renderAlert()}
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Book Now!</button>
                </form>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }
}


function validate(formProps) {
    const errors = {};

    if(!formProps.email) {
        errors.email = 'Please enter an Email';
    }

    if(!formProps.admin) {
        errors.admin = 'Please enter the admin name';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'bookStand',
    fields: ['email', 'admin', 'marketing_document', 'logo'],
    validate
}, mapStateToProps, actions)(BookStand);
