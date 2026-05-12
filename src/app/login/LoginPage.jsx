import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Mail,
  LockKeyhole,
} from "lucide-react";

export default function LoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleLogin(e) {

    e.preventDefault();

    if (
      email === "admin@woolly.com" &&
      password === "12345678"
    ) {

      localStorage.setItem(
        "woolly_admin",
        "true"
      );

      navigate("/dashboard");

    } else {

      setError("Credenciales incorrectas");

    }

  }

  return (

    <section
      className="
        min-h-screen

        bg-gradient-to-br
        from-[#FFF7F1]
        via-[#FFF9F5]
        to-[#FFE8CC]

        flex
        items-center
        justify-center

        px-5
      "
    >

      <div
        className="
          w-full
          max-w-[520px]

          bg-white/70

          backdrop-blur-xl

          rounded-[42px]

          p-10

          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        "
      >

        <div className="text-center">

          <p className="text-[#FF6B00] font-semibold">
            Woolly Admin
          </p>

          <h1
            className="
              text-5xl

              font-black

              tracking-[-2px]

              mt-4
            "
          >
            Iniciar sesión
          </h1>

        </div>

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >

          <div className="relative">

            <Mail
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2

                text-[#999]
              "
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full

                bg-[#F8F8F8]

                rounded-2xl

                py-5
                pl-14
                pr-5

                outline-none
              "
            />

          </div>

          <div className="relative">

            <LockKeyhole
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2

                text-[#999]
              "
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                w-full

                bg-[#F8F8F8]

                rounded-2xl

                py-5
                pl-14
                pr-5

                outline-none
              "
            />

          </div>

          {error && (

            <div
              className="
                bg-red-50

                text-red-500

                rounded-2xl

                px-5
                py-4

                text-sm
                font-medium
              "
            >
              {error}
            </div>

          )}

          <button
            type="submit"
            className="
              w-full

              bg-[#FF6B00]
              hover:bg-[#e55f00]

              text-white

              py-5

              rounded-2xl

              font-bold

              transition-all
            "
          >
            Entrar al dashboard
          </button>

        </form>

      </div>

    </section>

  );
}