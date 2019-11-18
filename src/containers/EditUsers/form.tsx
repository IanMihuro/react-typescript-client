import React from "react";
import useForm from "react-hook-form";
import { ILocation } from "../../utils/Types";

interface IEditFormProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    location: ILocation[];
    role: boolean;
  };
  editMeta: any;
  handleSubmit: any;
}
const FormComponent: React.SFC<IEditFormProps> = props => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(props.handleSubmit)} noValidate>
      <h3>Edit User</h3>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          defaultValue={props.user.firstName}
          ref={register({ required: true })}
        />
        {errors.firstName && (
          <span className="error">First Name is required</span>
        )}
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          defaultValue={props.user.lastName}
          ref={register({ required: true })}
        />
        {errors.lastName && (
          <span className="error">Last Name is required</span>
        )}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          defaultValue={props.user.email}
          ref={register({
            required: true,
            pattern: RegExp(
              /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            )
          })}
        />
        {errors.email && <span className="error">Email is required</span>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          defaultValue={props.user.password}
          ref={register({ required: true })}
        />
        {errors.password && <span className="error">Password is required</span>}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          defaultValue={props.user.phoneNumber}
          ref={register}
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
            defaultValue={props.user.location[0].streetAddress}
            ref={register}
          />
        </div>
        <div className="form-group">
          <label>Suite Number</label>
          <input
            type="text"
            name="suiteNumber"
            placeholder="Suite Number"
            defaultValue={props.user.location[0].suiteNumber}
            ref={register}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            defaultValue={props.user.location[0].city}
            ref={register}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            defaultValue={props.user.location[0].state}
            ref={register}
          />
        </div>
      </>
      {/* location */}
      <div className="form-group">
        <label>Role</label>
        <select
          name="role"
          defaultValue={props.user.role.toString()}
          ref={register}
        >
          <option value="true">Admin</option>
          <option value="false">Non-Admin</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={props.editMeta.isLoading}
        className="btn btn-primary btn-block"
      >
        Submit
      </button>
    </form>
  );
};
export default FormComponent;
