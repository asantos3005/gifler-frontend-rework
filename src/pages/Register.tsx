import { useForm } from "react-hook-form";

type RegisterFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function Register() {
  return (
      <MyForm />
  );
}

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    const formBody = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    }

    console.log("Submitting:", formBody);

    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formBody),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="formContainer">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div >
          
          <div className="formGroupSpacing">
            <label>First Name</label>
            <input {...register("firstName", { required: "First Name is required" })} />
            {errors.firstName && <p className="errorMessage">{errors.firstName.message}</p>}
          </div>

          <div className="formGroupSpacing">
            <label>Last Name</label>
            <input {...register("lastName", { required: "Last Name is required" })} />
            {errors.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
          </div>

          <div className="formGroupSpacing">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="errorMessage">{errors.email.message}</p>}
          </div>

          <div className="formGroupSpacing">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters long" },
              })}
            />
            {errors.password && <p className="errorMessage">{errors.password.message}</p>}
          </div>

          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default Register;
