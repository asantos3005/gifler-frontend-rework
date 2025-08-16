import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type LoginFormInputs = {
  email: string;
  password: string
};

function Login() {
  return (
    <main>
      <MyForm />
    </main>
  );
}

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    const formBody = {
      email: data.email,
      password: data.password
    }

    console.log("Submitting:", formBody);

    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formBody),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="registerFormContainer">

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

          <input type="submit" value="Login" />
        </div>
      </form>
      <div className="formSpacing">
        <p>New to Gifler?</p>
        <Link to={'/register'}>Sign Up</Link>
      </div>
     
    </div>
  );
}

export default Login;
