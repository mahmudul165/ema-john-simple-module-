import React from "react";
import { useForm } from "react-hook-form";
import "../Shipping/Shipping.css";
import useAuth from "../../hooks/useAuth";
const Shipping = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="shipping">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} /> <br />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        <input placeholder="phone" {...register("phone")} /> <br />
        <input placeholder="address" {...register("address")} /> <br />
        {/* errors will return when field validation fails  */}
        {errors.email && (
          <span className="error">This field is required</span>
        )}{" "}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
