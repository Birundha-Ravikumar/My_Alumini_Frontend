import React from "react";
import { useForm } from "react-hook-form";

const AdminForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
      <div className="form-group">
        <label>FirstName</label>
        <input
          className="form-control"
          type="text"
          placeholder="Type alumnus name"
          {...register("firstame")}
        />
      </div>
      <div className="form-group">
        <label>LastName</label>
        <input
          className="form-control"
          type="text"
          placeholder="Type Username"
          {...register("lastName")}
        />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <select className="form-control" type="option" {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="Type email"
          {...register("Email")}
        />
      </div>
      <div className="form-group">
        <label>MobileNumber</label>
        <input
          className="form-control"
          type="number"
          placeholder="Type mobile"
          {...register("mobile No")}
        />
      </div>
      <div className="form-group">
        <label>RollNumber</label>
        <input
          className="form-control"
          type="number"
          placeholder="Type rollNumber"
          {...register("roll No")}
        />
      </div>
      <div className="form-group">
        <label>RegisterNumber</label>
        <input
          className="form-control"
          type="number"
          placeholder="Type password"
          {...register("register No")}
        />
      </div>
      <div className="form-group">
        <label>StartingYear</label>
        <input
          className="form-control"
          type="year"
          placeholder="Type year"
          {...register("startingYear")}
        />
      </div>
      <div className="form-group">
        <label>endingyear</label>
        <input
          className="form-control"
          type="year"
          placeholder="Type Year"
          {...register("endingyear")}
        />
      </div>
      <div className="form-group">
        <label>Degree</label>
        <input
          className="form-control"
          type="text"
          placeholder="Type degree"
          {...register("degree")}
        />
      </div>
      <div className="form-group">
        <label>Department</label>
        <input
          className="form-control"
          type="text"
          placeholder="Type department"
          {...register("department")}
        />
      </div>

      <label>
        <input type="submit" value="submit" />
      </label>
      </div>
      
    </form>
  );
};

export default AdminForm;