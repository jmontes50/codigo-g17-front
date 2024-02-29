import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {/* cada div es una tarjeta que el componente mostrará */}
        <div>
          <section className="text-gray-600 body-font">
            <div
              className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
              bis_skin_checked="1"
            >
              <div
                className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                bis_skin_checked="1"
              >
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Viste tu estilo
                  <br className="hidden lg:inline-block" />
                  vive tu moda!
                </h1>
                <p className="mb-8 leading-relaxed">
                  Con nuestra app de ropa, no solo estás comprando prendas,
                  estás invirtiendo en tu estilo de vida. Desde las últimas
                  tendencias hasta clásicos atemporales, nuestra selección de
                  prendas de alta calidad está diseñada para reflejar tu
                  personalidad única
                </p>
                <div className="flex justify-center" bis_skin_checked="1">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                  {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Button
                  </button> */}
                </div>
              </div>
              <div
                className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                bis_skin_checked="1"
              >
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://images.unsplash.com/photo-1607952109405-d0b5aa52c13d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="text-gray-600 body-font">
            <div
              className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
              bis_skin_checked="1"
            >
              <div
                className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
                bis_skin_checked="1"
              >
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://images.unsplash.com/photo-1607952108806-b0ad4c7317ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                />
              </div>
              <div
                className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                bis_skin_checked="1"
              >
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  ¡Descubre la esencia única
                  <br className="hidden lg:inline-block" />
                  de la elegancia con nuestra app de ropa!
                </h1>
                <p className="mb-8 leading-relaxed">
                  Experimenta la facilidad de encontrar la prenda perfecta con
                  solo deslizar tu dedo. Descubre nuevos looks, encuentra
                  inspiración y redefine tu estilo con nosotros. ¡Viste con
                  confianza, vive con estilo! Tu guardarropa perfecto está a
                  solo un clic de distancia.
                </p>
                <div className="flex justify-center" bis_skin_checked="1">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Slider>
    </div>
  );
}
