const projects = [
    {
        id: "portfolio",
        titleAccent: "Port",
        titleRest: "Folio",
        description:
            "El portafolio en el que estás ahora mismo. Una SPA construida con React 18, con arquitectura por componentes, modo claro/oscuro y diseño responsive pensado para presentar mi trabajo de forma clara.",
        image:
            "https://repository-images.githubusercontent.com/417920458/9158b0b4-2b99-4a45-b7a4-0a66804486fc",
        tech: ["devicon-react-original colored"],
        repo: "https://github.com/GedGonz/GedGonz",
        demo: "https://gedgonz.github.io/GedGonz",
    },
    {
        id: "bluebank",
        titleAccent: "Blue",
        titleRest: "Bank",
        description:
            "Plataforma de banca digital para gestionar cuentas de ahorro. El backend en .NET Core aplica Clean Architecture, DDD y patrones de diseño, con autenticación JWT y registro de logs; el frontend en Angular consume la API de forma segura.",
        image:
            "https://repository-images.githubusercontent.com/351929749/fd248500-9de6-11eb-94df-a0ad560e771c",
        tech: [
            "devicon-typescript-original colored",
            "devicon-angularjs-plain colored",
            "devicon-dotnetcore-plain colored",
        ],
        repo: "https://github.com/GedGonz/BlueBank",
        demo: "https://gedgonz.github.io/BlueBank",
    },
    {
        id: "funkopop",
        titleAccent: "Funko",
        titleRest: "Pop",
        description:
            "Tienda de productos Funko Pop con carrusel y buscador en tiempo real. Demuestra la comunicación entre componentes de Angular y el consumo de una API propia construida en Node.js.",
        image:
            "https://repository-images.githubusercontent.com/223289504/594c5d00-bc4a-11ea-932b-2273e258bb6e",
        tech: [
            "devicon-typescript-original colored",
            "devicon-angularjs-plain colored",
            "devicon-mongodb-plain colored",
        ],
        repo: "https://github.com/GedGonz/TiendaFunkoPOP",
        demo: "https://gedgonz.github.io/TiendaFunkoPOP",
    },
    {
        id: "rickandmorty",
        titleAccent: "Rick",
        titleRest: "&Morty",
        description:
            "Explorador de personajes de la serie Rick and Morty. Practico el consumo de una API pública y la carga eficiente de datos con scroll infinito para una navegación fluida.",
        image:
            "https://repository-images.githubusercontent.com/381210182/c9263997-0b9e-4fab-ab46-61432263b5d1",
        tech: [
            "devicon-typescript-original colored",
            "devicon-angularjs-plain colored",
        ],
        repo: "https://github.com/GedGonz/AppRickAndMorty",
        demo: "https://gedgonz.github.io/AppRickAndMorty",
    },
    {
        id: "blogjs",
        titleAccent: "Blog",
        titleRest: "JS",
        description:
            "Blog completo con gestión de publicaciones (crear, editar y eliminar posts). Un CRUD full-stack construido con Node.js, Express y MongoDB que cubre el ciclo completo de datos.",
        image:
            "https://repository-images.githubusercontent.com/55745086/2c4c7a00-bc4b-11ea-897e-18121dd77df5",
        tech: [
            "devicon-javascript-plain colored",
            "devicon-nodejs-plain colored",
            "devicon-mongodb-plain colored",
        ],
        repo: "https://github.com/GedGonz/BLOGJS",
        demo: "https://blogj.glitch.me",
    },
    {
        id: "githubapi",
        titleAccent: "Github",
        titleRest: "API",
        description:
            "Buscador de perfiles de GitHub: al introducir un usuario muestra sus datos principales y lista sus repositorios. Un ejercicio de integración con la API de GitHub desde Angular.",
        image:
            "https://repository-images.githubusercontent.com/194757099/4846a600-89a9-11eb-9926-2c9bb154c386",
        tech: [
            "devicon-typescript-original colored",
            "devicon-angularjs-plain colored",
            "devicon-github-plain colored",
        ],
        repo: "https://github.com/GedGonz/AngularAPIGitHub",
        demo: "https://gedgonz.github.io/AngularAPIGitHub",
    },
    {
        id: "reactmovies",
        titleAccent: "React",
        titleRest: " Movies",
        description:
            "Catálogo de películas donde exploro el top de estrenos, busco títulos y consulto el detalle de cada uno. Mi proyecto para dominar los fundamentos de React: componentes, estado y consumo de API.",
        image:
            "https://repository-images.githubusercontent.com/402940655/bd0c910d-370d-42cc-a9a6-9d4a7929e043",
        tech: ["devicon-react-original colored"],
        repo: "https://github.com/GedGonz/reactMovie",
        demo: "https://gedgonz.github.io/reactMovie/",
    },
    {
        id: "notifyjenkins",
        titleAccent: "notify",
        titleRest: "jenkins",
        description:
            "Herramienta de productividad: un script en Bash que lanza notificaciones de escritorio en Linux cuando termina un job de Jenkins, indicando su nombre y estado. Si falla, incluye el enlace directo a la ejecución para depurar al instante.",
        image:
            "https://repository-images.githubusercontent.com/883284499/12e5eba2-3904-46c7-a4c6-07e43a777292",
        tech: ["devicon-jenkins-line colored", "devicon-bash-plain colored"],
        repo: "https://github.com/GedGonz/notify-jenkins-jobs",
        demo: null,
    },
];

export default projects;
