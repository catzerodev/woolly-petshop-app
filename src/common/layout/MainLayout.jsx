import Navbar from "../components/navbar/Navbar";
import SimpleFooter from "../components/footer/SimpleFooter";

export default function MainLayout({ children }) {

  return (
    <div
      className="
        min-h-screen

        bg-gradient-to-br
        from-[#FFF7F1]
        via-[#FFF9F5]
        to-[#FFE8CC]

        text-[#1C1C1E]

        overflow-x-hidden
      "
    >

      <Navbar />

      <main
        className="
          w-full

          max-w-[1600px]

          mx-auto

          px-4
          md:px-6
          lg:px-10

          pt-40
          md:pt-44
          lg:pt-48

          pb-16
          md:pb-24
        "
      >
        {children}
      </main>

      <SimpleFooter />

    </div>
  );
}