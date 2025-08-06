import { useForm } from "react-hook-form";

function Register() {
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
  } = useForm();


  const onSubmit = async (data: any) => {
  const response = await fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);
};

  
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="registerFormContainer">
                <label>First Name</label>
            <input {...register("firstName", {required:'First Name is required'})} />
            {typeof errors.firstName?.message === 'string' && (
            <p>{errors.firstName.message}</p>
            )}

            <label>Last Name</label>
            <input {...register("lastName", {required:'Last Name is required'})} />
            {typeof errors.lastName?.message === 'string' && (
            <p>{errors.lastName.message}</p>
            )}

            <label>Email</label>
            <input
            type="email"
            {...register("email", {
                required: "Email is required",
                pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format"
                }
            })}
            />
            {typeof errors.email?.message === 'string' && (
            <p>{errors.email.message}</p>
            )}

            <label>Password</label>
            <input type="password" {...register("password", {required:'true', minLength: 8})} />
            {typeof errors.password?.message === 'string' && (
            <p>{errors.password.message}</p>
            )}

            <input type="submit" value="Create GIF" />
        </div>

       
      </form>
    </div>
  );
}

export default Register;