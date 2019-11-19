import React from "react";
import useForm from "react-hook-form";

interface ISignUpFormProps {
  handleSubmit: any;
}

const FormComponent: React.SFC<ISignUpFormProps> = props => {
  const { register, handleSubmit, errors, watch, reset } = useForm();

  const onSubmit = (data: Record<string, any>, e: any) => {
    props.handleSubmit(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="First name"
          ref={register({ required: true })}
        />
        {errors.firstName && (
          <span className="error">First Name is required</span>
        )}
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Last name"
          ref={register({ required: true })}
        />
        {errors.lastName && (
          <span className="error">Last Name is required</span>
        )}
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          ref={register({
            required: true,
            pattern: RegExp(
              /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            )
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className="error">Email is required</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span className="error">Email pattern is incorrect</span>
        )}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          ref={register({ required: true })}
        />
        {errors.password && <span className="error">Password is required</span>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          placeholder="Confirm password"
          ref={register({
            required: true,
            validate: value => {
              return value === watch("password");
            }
          })}
        />
        {errors.confirmPassword &&
          errors.confirmPassword.type === "required" && (
            <span className="error">A confirmed password is required</span>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "validate" && (
            <span className="error">Passwords do not match</span>
          )}
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};
export default FormComponent;
