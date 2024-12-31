import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 py-8 text-center text-white">
        <h1 className="text-4xl font-bold">Bienvenido a Mi Portafolio</h1>
        <p className="mt-2">Descubre mis proyectos y habilidades</p>
        <button className="mt-4 rounded bg-white px-6 py-2 font-semibold text-blue-600 hover:bg-gray-200">
          Ver Proyectos
        </button>
      </header>

      <section className="px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold">Sobre Mí</h2>
        <p className="text-gray-700">
          Soy un desarrollador apasionado por crear soluciones innovadoras y
          eficientes. Con experiencia en diversas tecnologías y lenguajes de
          programación, me esfuerzo por mejorar continuamente y aprender nuevas
          habilidades.
        </p>
      </section>

      <section className="bg-gray-200 px-4 py-8">
        <h2 className="text-center">SKILLS</h2>

        <div className="flex justify-evenly">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Tecnologias</h3>
            <ul className="list-inside list-disc">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Tools</h3>
            <ul className="list-inside list-disc">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold">Proyectos Destacados</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Proyecto 1</h3>
          <p className="text-gray-700">Descripción del proyecto 1.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Proyecto 2</h3>
          <p className="text-gray-700">Descripción del proyecto 2.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Proyecto 3</h3>
          <p className="text-gray-700">Descripción del proyecto 3.</p>
        </div>
      </section>

      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>&copy; 2023 Mi Nombre. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
