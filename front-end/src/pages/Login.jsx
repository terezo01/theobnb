import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="gap-4 flex flex-col items-center mx-auto w-full max-w-96">
        <h1 className="text-3xl font-bold">Faça seu Login</h1>

        <form action="" className="flex flex-col gap-2 w-full">
          <input
            type="email"
            className="w-full border border-gray-300 px-4 py-2 rounded-full "
            placeholder="Digite seu e-mail"
          />
          <input
            type="password"
            className="w-full border border-gray-300 px-4 py-2 rounded-full "
            placeholder="Digite sua senha"
          />
          <button className="cursor-pointer bg-primary-400 text-white w-full border border-gray-300 px-4 py-2 rounded-full">
            Login
          </button>
        </form>

        <p>
          Ainda não tem conta?{" "}
          <Link to="/register" className="underline font-semibold">
            {" "}
            Registre se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
