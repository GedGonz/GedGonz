const projects = [
    {
        id: "portfolio",
        featured: true,
        titleAccent: "Port",
        titleRest: "Folio",
        description:
            "El portafolio en el que estás ahora mismo. Una SPA construida con React 18, con arquitectura por componentes, modo claro/oscuro y diseño responsive pensado para presentar el trabajo de forma clara.",
        image:
            "https://repository-images.githubusercontent.com/417920458/9158b0b4-2b99-4a45-b7a4-0a66804486fc",
        tech: ["devicon-react-original colored"],
        repo: "https://github.com/GedGonz/GedGonz",
        demo: "https://gedgonz.github.io/GedGonz",
    },
    {
        id: "domusnet",
        featured: true,
        titleAccent: "Domus",
        titleRest: "Net",
        description:
            "Sistema web para la gestión de comunidades residenciales: administración de viviendas y residentes, comprobantes de pago y generación automática de cuentas por cobrar mediante cron. Backend en Spring Boot (Java 17) con arquitectura hexagonal, JWT y Cloudinary; frontend en Angular 20 + TailwindCSS sobre PostgreSQL.",
        image:
            "https://raw.githubusercontent.com/GedGonz/DomusNet/main/screenshots/01-login-page.png",
        tech: [
            "devicon-angularjs-plain colored",
            "devicon-tailwindcss-plain colored",
            "devicon-spring-plain colored",
            "devicon-java-plain colored",
            "devicon-postgresql-plain colored",
        ],
        repo: "https://github.com/GedGonz/DomusNet",
        demo: null,
    },
    {
        id: "geovisor",
        featured: true,
        titleAccent: "Geo",
        titleRest: "Visor · GIS",
        description:
            "Geovisor GIS full-stack para la gestión de mantenimiento de vegetación bajo redes eléctricas (tala y poda): carga de archivos KMZ con la geometría de la red, extracción de vanos y apoyos, y proyección de las zonas de poda sobre un mapa interactivo. Frontend en Angular + TypeScript con OpenLayers; backend en .NET Core con Entity Framework Core sobre PostgreSQL. En el backend se refactorizó la importación de KMZ aplicando el patrón Strategy para soportar múltiples tipos de geometría de forma extensible (vanos, apoyos y otros objetos), se paralelizó el procesado para acelerar la carga y se generó exportación dinámica de CSV. En el frontend se integró el inicio de sesión con Azure AD (MSAL) con manejo de refresh token, y se implementó un theming dinámico multiempresa que adapta colores y marca según la compañía autenticada.",
        image: process.env.PUBLIC_URL + "/images/geovisor.webp",
        tech: [
            "devicon-angularjs-plain colored",
            "devicon-typescript-original colored",
            "devicon-dotnetcore-plain colored",
            "devicon-postgresql-plain colored",
            "devicon-azure-plain colored",
        ],
        repo: null,
        demo: null,
        note: "Proyecto profesional · código privado",
    },
    {
        id: "tcpmqtt",
        featured: true,
        titleAccent: "TCP",
        titleRest: " → MQTT",
        description:
            "Servicio backend en Python que actúa de puente entre dispositivos industriales IoT (protocolo binario sobre TCP) y un ecosistema de mensajería MQTT. Se diseñó el reensamblado de tramas de un stream TCP (fragmentadas o concatenadas), un modelo de concurrencia de un hilo por conexión con una cola desacoplada de un único consumidor para publicar sin bloqueos, validación de dispositivos, cifrado del payload y endpoints de salud y métricas estilo Prometheus. Contenerizado con Docker.",
        image: process.env.PUBLIC_URL + "/images/tcpmqtt.webp",
        tech: [
            "devicon-python-plain colored",
            "devicon-docker-plain colored",
        ],
        repo: null,
        demo: null,
        note: "Proyecto profesional · código privado",
    },
    {
        id: "mqttalarm",
        featured: true,
        titleAccent: "MQTT",
        titleRest: " · Event & Alarm",
        description:
            "Microservicio backend (Spring Boot, Java 17) que consume los eventos MQTT de paneles industriales IoT, los normaliza, persiste en PostgreSQL y dispara notificaciones multicanal y alarmas predictivas. Se extrajo de un backend monolítico a un servicio independiente, montando su infraestructura (Docker + CI en Jenkins). Se refactorizó el procesamiento de entradas digitales aplicando Strategy/Composite y Builder (extensible sin tocar el orquestador) y se desarrolló la lógica de alarmas y su despacho por push, email, SMS y llamada. Incluye procesamiento desacoplado por cola con backpressure, envío de notificaciones solo tras el commit en BD, idempotencia de eventos, reintentos ante deadlocks y monitoreo operativo.",
        image: process.env.PUBLIC_URL + "/images/mqttalarm.webp",
        tech: [
            "devicon-java-plain colored",
            "devicon-spring-plain colored",
            "devicon-postgresql-plain colored",
            "devicon-docker-plain colored",
            "devicon-jenkins-line colored",
        ],
        repo: null,
        demo: null,
        note: "Proyecto profesional · código privado",
    },
    {
        id: "reports",
        featured: true,
        titleAccent: "Reports",
        titleRest: " · Engine",
        description:
            "Microservicio backend (Spring Boot, Java 17) para la generación y envío de reportes empresariales en PDF, Excel y Word. Se diseñó y montó toda su infraestructura de despliegue: se contenerizó el servicio con Docker (build multi-stage) y se configuraron desde cero los pipelines de CI/CD en Jenkins para los entornos de desarrollo y producción. Se extrajo de un backend monolítico a un servicio independiente y se aplicó el patrón Strategy para soportar dos motores de render intercambiables —BIRT y HTML dinámico a PDF con Chromium headless (Playwright)— seleccionables en tiempo de ejecución. Se actualizó el motor de reportes y se integró la generación asíncrona por colas y el envío por correo con plantillas. Se expone de forma transparente al frontend mediante un reverse proxy Nginx sobre la misma URL del backend.",
        image: process.env.PUBLIC_URL + "/images/reports.webp",
        tech: [
            "devicon-java-plain colored",
            "devicon-spring-plain colored",
            "devicon-postgresql-plain colored",
            "devicon-docker-plain colored",
            "devicon-jenkins-line colored",
            "devicon-nginx-original colored",
        ],
        repo: null,
        demo: null,
        note: "Proyecto profesional · código privado",
    },
    {
        id: "libraryepub",
        featured: true,
        titleAccent: "Library",
        titleRest: "EPUB",
        description:
            "Aplicación full-stack para explorar una biblioteca digital de libros EPUB: catálogo con portadas, filtros A-Z, favoritos y un visor EPUB embebido. Backend en Spring Boot (Java 17) con PostgreSQL y frontend en Angular, todo desplegable con Docker Compose.",
        image:
            "https://raw.githubusercontent.com/GedGonz/libraryEpub/main/docs/screenshots/home-books.png",
        tech: [
            "devicon-angularjs-plain colored",
            "devicon-spring-plain colored",
            "devicon-java-plain colored",
            "devicon-postgresql-plain colored",
            "devicon-docker-plain colored",
        ],
        repo: "https://github.com/GedGonz/libraryEpub",
        demo: null,
    },
    {
        id: "geobatch",
        featured: true,
        titleAccent: "Geo",
        titleRest: "Batch",
        description:
            "Procesamiento masivo de datos geoespaciales con Spring Batch: carga y gestiona información de apoyos junto a sus coordenadas geográficas. Aprovecha PostGIS e Hibernate Spatial sobre PostgreSQL para el manejo eficiente de datos espaciales.",
        image: process.env.PUBLIC_URL + "/images/geobatch.webp",
        tech: [
            "devicon-java-plain colored",
            "devicon-spring-plain colored",
            "devicon-postgresql-plain colored",
            "devicon-gradle-plain colored",
        ],
        repo: "https://github.com/GedGonz/GeoBatch",
        demo: null,
    },
    {
        id: "bluebank",
        featured: true,
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
        id: "notifyjenkins",
        featured: true,
        titleAccent: "notify",
        titleRest: "jenkins",
        description:
            "Herramienta de productividad: un script en Bash que lanza notificaciones de escritorio en Linux cuando termina un job de Jenkins, indicando su nombre y estado. Si falla, incluye el enlace directo a la ejecución para depurar al instante.",
        image: process.env.PUBLIC_URL + "/images/notifyjenkins.webp",
        tech: ["devicon-jenkins-line colored", "devicon-bash-plain colored"],
        repo: "https://github.com/GedGonz/notify-jenkins-jobs",
        demo: null,
    },
    {
        id: "notifyreviewer",
        featured: true,
        titleAccent: "notify",
        titleRest: "reviewer",
        description:
            "Herramienta de productividad: un script en Bash que consulta la API de GitLab y lanza notificaciones de escritorio en Linux por cada Merge Request asignado que aún no has aprobado, con enlace directo para revisarlo al instante.",
        image: process.env.PUBLIC_URL + "/images/notifyreviewer.webp",
        tech: ["devicon-gitlab-plain colored", "devicon-bash-plain colored"],
        repo: "https://github.com/GedGonz/notify-reviewer",
        demo: null,
    },
    {
        id: "funkopop",
        featured: false,
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
        featured: false,
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
        featured: false,
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
        featured: false,
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
        featured: false,
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
];

export default projects;
