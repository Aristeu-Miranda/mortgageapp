import Calculation from "./components/Calculation/Calculation";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen">
          <div className="m-auto max-w-carde w-mob flex-col h-full">
              <div className="bg-white w-full px-5 py-6">
                  <Calculation />
              </div>
              <div className="bg-slatefiv w-full">

              </div>
          </div>
      </section>
    </>
  );
}
