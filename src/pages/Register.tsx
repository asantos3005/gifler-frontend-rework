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
        <input type="submit" value="Create GIF" />
      </form>
    </div>
  );
}

export default Register;