import React, { Component } from "react";

// import Spinner from "react-bootstrap/Spinner";

import { IMeta } from "../../utils/Types";

interface IFormState {}
interface IAddFormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  streetAddress: string;
  suiteNumber: string;
  city: string;
  state: string;
  role: boolean;
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };

  addNewUserAction: Function;
  meta: IMeta;

  handleChange: any;
  handleSubmit: any;

  validated: boolean;
}
class FormComponent extends Component<IAddFormProps, IFormState> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      streetAddress,
      suiteNumber,
      city,
      state,
      role,
      errors,

      meta,

      handleChange,
      handleSubmit,

      validated
    } = this.props;
    return (
      //   Alternate Form
      <>
        <h3>Add User</h3>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleChange}
            />
            {errors.firstName.length > 0 && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange}
            />
            {errors.lastName.length > 0 && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            {errors.password.length > 0 && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handleChange}
            />
          </div>
          <>
            {" "}
            {/* location */}
            <div className="form-group">
              <label>Street Address</label>
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                value={streetAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Suite Number</label>
              <input
                type="text"
                name="suiteNumber"
                placeholder="Suite Number"
                value={suiteNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={state}
                onChange={handleChange}
              />
            </div>
          </>
          {/* location */}
          <div className="form-group">
            <label>Role</label>
            <select value={role.toString()} onChange={handleChange}>
              <option value="true">Admin</option>
              <option value="false">Non-Admin</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={
              errors.firstName.length > 0 ||
              errors.lastName.length > 0 ||
              errors.email.length > 0 ||
              errors.password.length > 0
            }
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default FormComponent;
