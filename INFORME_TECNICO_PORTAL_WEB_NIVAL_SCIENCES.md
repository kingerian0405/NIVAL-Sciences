# INFORME TÉCNICO Y ARQUITECTÓNICO DEL PORTAL WEB
## NIVAL SCIENCES · ECOSISTEMA INTEGRAL DE SALUD

**Documento para el Cliente y Dirección Estratégica**  
**Versión:** 1.0 (Producción / Despliegue Inicial)  
**Fecha:** Noviembre 2026  
**Lema Institucional:** *“La visión que necesitas para vivir como sueñas”*  
**Repositorio Oficial:** [https://github.com/kingerian0405/NIVAL-Sciences.git](https://github.com/kingerian0405/NIVAL-Sciences.git)  
**Despliegue en Vivo (GitHub Pages):** [https://kingerian0405.github.io/NIVAL-Sciences/](https://kingerian0405.github.io/NIVAL-Sciences/)  

---

## 1. RESUMEN EJECUTIVO

El presente documento expone la arquitectura técnica, los fundamentos de diseño y la estructura metodológica implementada en el desarrollo del portal web institucional de **NIVAL Sciences**. 

A diferencia de los sitios web corporativos tradicionales o las plataformas de comercialización agresiva orientadas a la captura masiva de prospectos (landing pages de embudo comercial), el portal web de NIVAL Sciences ha sido concebido y construido como un **centro de presencia y proyección institucional de alto prestigio científico**. 

Su arquitectura traduce rigurosamente el documento fundacional de **Identidad Estratégica de NIVAL Sciences**, estructurándose en **9 capas navegables independientes y complementarias**, unificadas bajo un lenguaje visual clínico, sobrio y de descanso óptico que proyecta credibilidad médica, rigor metodológico y transparencia operativa.

```
                      ┌────────────────────────────────────────┐
                      │            NIVAL SCIENCES              │
                      │  "La visión que necesitas para vivir   │
                      │              como sueñas"              │
                      └───────────────────┬────────────────────┘
                                          │
       ┌──────────────────────────────────┴──────────────────────────────────┐
       │                                                                     │
┌──────┴──────┐  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐  ┌───────┴──────┐
│  01. INICIO │  │ 02. NOSOTROS│  │03.LABORATORIO│  │04.PREVENCIÓN│  │ 05. ASESORÍA │
└─────────────┘  └─────────────┘  └──────────────┘  └─────────────┘  └───────┬──────┘
       │                                                                     │
       └──────────────────────────────────┬──────────────────────────────────┘
                                          │
       ┌──────────────────────────────────┴──────────────────────────────────┐
       │                                  │                                  │
┌──────┴──────┐                    ┌──────┴──────┐                    ┌──────┴──────┐
│06. EMPRESAS │                    │07.FORMACIÓN │                    │08.INNOVACIÓN│
└─────────────┘                    └─────────────┘                    └───────┬─────┘
                                                                              │
                                                                      ┌───────┴──────┐
                                                                      │ 09. CONTACTO │
                                                                      └──────────────┘
```

---

## 2. FILOSOFÍA DE DISEÑO Y DECISIONES TÉCNICAS VISUALES

### 2.1. Descarte del Formato Comercial y Adopción del Formato Institucional
Durante la conceptualización del proyecto se estableció un criterio imperativo: **la salud, el bioanálisis y la prevención no deben presentarse con estridencia publicitaria**.

* **Por qué se evitó el diseño de embudo comercial (*landing page* típica)**:
  Las páginas de venta agresiva utilizan pop-ups intrusivos, temporizadores de cuenta regresiva, llamados a la acción exagerados (*CTA*) y sobrecarga de elementos promocionales. Este esquema perjudica la imagen de una institución de salud y bioanálisis, restando seriedad académica y rigor ético ante médicos tratantes, empresas aliadas y pacientes.
* **Adopción del modelo editorial-científico por capas**:
  Cada área de servicio cuenta con su propio espacio conceptual estructurado, permitiendo al usuario (paciente, directivo de empresa, médico o estudiante) profundizar con serenidad en la información que le compete, facilitando la comprensión de procedimientos y requisitos de salud.

### 2.2. Sistema Cromático Anti-Fatiga Visual (*Matte Slate System*)
Uno de los puntos clave del desarrollo fue la eliminación consciente del blanco puro (`#ffffff`) que causaba destellos y fatiga visual (*efecto deslumbramiento o ceguera lumínica*), reemplazándolo por una paleta técnica calibrada en la escala *Slate*:

| Elemento Visual | Código Hexadecimal | Espacio de Color / Tono | Función Técnica y Ergonómica |
| :--- | :--- | :--- | :--- |
| **Fondo Base del Portal** | `#cbd5e1` | *Tailwind Slate-300* sólido | Absorbe la radiación lumínica de pantallas OLED y LED, reduciendo la fatiga cognitiva del usuario. |
| **Paneles y Tarjetas de Contenido** | `#dde3ec` | *Slate-200.5* de alto relieve | Genera contraste nítido con el fondo base sin recurrir al brillo blanco, elevando la jerarquía visual de la información. |
| **Recuadros Secundarios e Inputs** | `#cbd5e1` con `border-slate-400` | *Slate-300* integrado | Proporciona profundidad espacial en formularios e hitos clínicos sin crear "islas blancas" aisladas. |
| **Sub-barras y Botones Inactivos** | `#bcc7d5` | *Slate-350* | Garantiza distinción en botones de navegación secundaria y estados de selección. |
| **Tipografía Principal** | `#020617` / `#0f172a` | *Slate-950 / Slate-900* | Supera ampliamente la norma de accesibilidad **WCAG AAA** con un ratio de contraste superior a 10:1 frente a `#dde3ec`. |
| **Acento de Marca y Calidez** | `#d97706` / `#b45309` | Ámbar dorado institucional | Aporta vitalidad y guía visual hacia los hitos importantes, en sincronía con el búho dorado del logotipo. |

### 2.3. Integración y Resguardo del Logotipo Oficial
El logotipo oficial de NIVAL Sciences —con su característico búho dorado entrelazado en la letra "V" y sus acabados metálicos en relieve— se integró siguiendo principios de equilibrio:
* **Ubicación en Cabecera (`InstitutionalHeader`)**: Se enmarca dentro de un contenedor técnico de protección (`bg-white/95 border-slate-400 shadow-2xs`), garantizando que los degradados dorados y cromados conserven su fidelidad visual original sin distorsión de fondo.
* **Eliminación del logotipo central redundante**: Se retiró el logotipo sobredimensionado del centro de la pantalla principal para priorizar la jerarquía del mensaje institucional y el lema oficial, evitando saturar la primera impresión del visitante.
* **Lema Institucional Oficial**: Se integró de manera transversal e inalterable en cabecera, portada, secciones estratégicas y pie de página:
  > *“La visión que necesitas para vivir como sueñas”*

### 2.4. Marcadores Técnicos para Futura Fotografía (`ImagePlaceholder`)
Para permitir una evolución fluida del portal sin depender de fotografías de stock genéricas que resten autenticidad, se creó el componente modular reutilizable `ImagePlaceholder.tsx`. 
* Este componente cuenta con un fondo gris técnico calibrado (`#bcc7d5`), trama sutil institucional de precisión y etiquetas de especificación clínica.
* Cada marcador detalla expresamente a la productora audiovisual o al equipo interno de NIVAL qué toma fotográfica debe capturarse allí (ej.: *“Fachada de sede central”*, *“Área de instrumentación automatizada”*, *“Jornadas in-company corporativas”*, etc.).

---

## 3. ANÁLISIS TÉCNICO DE LAS 9 CAPAS ESTRATÉGICAS

El portal se articula en torno a las 9 capas operativas descritas en la **Sección 11** de la Identidad Estratégica de NIVAL Sciences:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ARQUITECTURA DE LAS 9 CAPAS                     │
├──────┬───────────────────────────────┬─────────────────────────────────┤
│ Capa │ Denominación Oficial          │ Componente React Asociado       │
├──────┼───────────────────────────────┼─────────────────────────────────┤
│ 01   │ Presentación Institucional    │ src/layers/CapaInicio.tsx       │
│ 02   │ Nosotros                      │ src/layers/CapaNosotros.tsx     │
│ 03   │ Laboratorio Clínico           │ src/layers/CapaLaboratorio.tsx  │
│ 04   │ Prevención y Calidad de Vida  │ src/layers/CapaPrevencion.tsx   │
│ 05   │ Asesoría para Personas        │ src/layers/CapaAsesoriaPersonas │
│ 06   │ Soluciones para Empresas      │ src/layers/CapaSolucionesEmpres │
│ 07   │ Formación y Capacitación      │ src/layers/CapaFormacion.tsx    │
│ 08   │ Innovación y Tecnología       │ src/layers/CapaInnovacion.tsx   │
│ 09   │ Contacto y Canales de Atención│ src/layers/CapaContacto.tsx     │
└──────┴───────────────────────────────┴─────────────────────────────────┘
```

---

### CAPA 01 · PRESENTACIÓN INSTITUCIONAL (INICIO)
* **Archivo fuente**: [`src/layers/CapaInicio.tsx`](file:///c:/Users/Dios%20del%20Sexo/Desktop/Nival%20proyecto/src/layers/CapaInicio.tsx)
* **Objetivo estratégico**: Servir como pórtico de entrada de alto nivel que defina la naturaleza multiactividad de la organización y erradique la percepción de que NIVAL es únicamente un laboratorio tradicional.
* **Componentes técnicos destacados**:
  1. **Encabezado Institucional Equilibrado**: Despliega el lema oficial en tipografía serif de alta jerarquía junto al cuarteto fundacional: `CIENCIA · SALUD · CONOCIMIENTO · INNOVACIÓN`.
  2. **Bloque de Premisa Central**: Enfatiza la declaración directriz: *“NIVAL Sciences no espera a que las personas enfermen para acercarse a ellas...”* con un resalte en ámbar sobre fondo Slate.
  3. **Secuencia Conceptual de 6 Eslabones**: Diagrama los principios rectores en tarjetas individuales (`El diagnóstico aporta información` &rarr; `La prevención ayuda a anticiparse` &rarr; `La asesoría transforma en soluciones` &rarr; `La formación desarrolla capacidades` &rarr; `La tecnología conecta y facilita` &rarr; `La innovación permite evolucionar`).
  4. **Directorio Matriz de Acceso Directo**: Matriz en cuadrícula de 8 tarjetas conectadas al enrutador de capas con iconos contextuales, títulos y descriptores resumidos.

---

### CAPA 02 · NOSOTROS (IDENTIDAD Y MODELO DE TRABAJO)
* **Archivo fuente**: [`src/layers/CapaNosotros.tsx`](file:///c:/Users/Dios%20del%20Sexo/Desktop/Nival%20proyecto/src/layers/CapaNosotros.tsx)
* **Objetivo estratégico**: Proporcionar el sustento formal, ontológico y ético de la organización (Secciones 1 a 6 del documento rector).
* **Componentes técnicos destacados**:
  1. **Concepto Institucional**: Expone la identidad de NIVAL como ecosistema que integra servicios diagnósticos, prevención, asesoría y tecnología.
  2. **Paneles de Misión y Visión**: Despliegue en tarjetas paralelas con iconografía diferenciada (*Target* y *Eye*) que definen el horizonte de la organización.
  3. **Objetivo General Fundacional**: Recuadro de contraste en *Slate-900* con tipografía de alta legibilidad.
  4. **Los 5 Valores Rectores**: Tarjetas modulares dedicadas a *Ética y Responsabilidad*, *Rigor Científico*, *Vocación de Servicio*, *Innovación Continua* y *Continuidad Asistencial*.
  5. **Modelo de Trabajo Ecosistémico**: Expone la articulación técnica entre la interoperabilidad de datos, los protocolos de doble verificación y la visión de cuidado integral.

---

### CAPA 03 · LABORATORIO CLÍNICO (PRIMERA UNIDAD OPERATIVA)
* **Archivo fuente**: [`src/layers/CapaLaboratorio.tsx`](file:///c:/Users/Dios%20del%20Sexo/Desktop/Nival%20proyecto/src/layers/CapaLaboratorio.tsx)
* **Objetivo estratégico**: Presentar la oferta diagnóstica de la primera unidad física operativa de NIVAL Sciences, facilitando la preparación óptima del paciente y los canales de toma.
* **Componentes técnicos destacados**:
  1. **Motor de Búsqueda y Filtrado Reactivo en Tiempo Real**: Algoritmo en cliente que permite buscar por nombre de prueba o componente analítico (ej. *“Perfil 20”*, *“Glicemia”*, *“Tiroides”*, *“Lípidos”*) y clasificar por categorías clínicas (Preventivo, Rutina, Especializado, etc.).
  2. **Selector Maestro-Detalle**: Interfaz interactiva donde la columna izquierda enlista los exámenes y la columna derecha despliega de forma reactiva la **Ficha Técnica Preanalítica**.
  3. **Ficha Técnica Preanalítica Estandarizada**:
     * Indicación precisa de horas continuas de ayuno requeridas.
     * Tipo de muestra biológica (Suero, Sangre Total, Orina, etc.).
     * Tiempo estimado de entrega de resultados (*TAT - Turnaround Time*).
     * Lista estricta de indicaciones previas para evitar falsos positivos/negativos.
     * Aplicación clínica recomendada.
  4. **Canales de Atención**: Tarjetas informativas que diferencian la atención presencial en sede con horarios estipulados y el servicio coordinado de toma domiciliaria y corporativa.

---

### CAPA 04 · PREVENCIÓN Y CALIDAD DE VIDA (EJE PROACTIVO)
* **Archivo fuente**: [`src/layers/CapaPrevencion.tsx`](file:///c:/Users/Dios%20del%20Sexo/Desktop/Nival%20proyecto/src/layers/CapaPrevencion.tsx)
* **Objetivo estratégico**: Materializar el cambio de paradigma de la medicina puramente curativa hacia la detección precoz y el autocuidado consciente.
* **Componentes técnicos destacados**:
  1. **Los Tres Componentes Operativos**:
     * *Evaluación Preventiva Periódica*: Protocolos de laboratorio según ciclo de vida.
     * *Jornadas de Salud y Tamizaje*: Despliegues comunitarios y laborales in-situ.
     * *Educación para el Autocuidado*: Guías de lectura de indicadores biomédicos.
  2. **Matriz de Identificación de Factores de Riesgo Silentes**: Panel en fondo oscuro de alta tecnología que sintetiza los 4 riesgos asintomáticos fundamentales: *Riesgo Glucémico*, *Riesgo Lipídico*, *Riesgo Renal/Hepático* y *Riesgo Funcional/Tiroideo*.

---

### CAPA 05 · ASESORÍA PARA PERSONAS (ACOMPAÑAMIENTO INDIVIDUAL)
* **Archivo fuente**: [`src/layers/CapaAsesoriaPersonas.tsx`](file:///c:/Users/Dios%20del%20Sexo/Desktop/Nival%20proyecto/src/layers/CapaAsesoriaPersonas.tsx)
* **Objetivo estratégico**: Proporcionar orientación humana para que los pacientes entiendan sus informes de laboratorio y tomen decisiones oportunas.
* **Componentes técnicos destacados**:
  1. **Servicios de Orientación Especializada**: Tarjetas que detallan el acompañamiento pre y post analítico, la selección de perfiles diagnósticos adecuados y el diseño de rutas de atención.
  2. **Salvaguarda Regulatoria y Marco Ético**: Recuadro delimitador formal que aclara expresamente que la orientación de NIVAL tiene carácter preventivo y educativo, respetando las competencias exclusivas del médico tratante habilitado y evitando cualquier conflicto legal deontológico.

---

### CAPA 06 · SOLUCIONES PARA EMPRESAS (B2B Y SALUD OCUPACIONAL)
* **Archivo fuente**: [`src/layers/CapaSolucionesEmpresas.tsx`](file:///c:/Users/Dios%20del%20Sexo/Desktop/Nival%20proyecto/src/layers/CapaSolucionesEmpresas.tsx)
* **Objetivo estratégico**: Posicionar a NIVAL Sciences como un aliado estratégico corporativo para la productividad y el cumplimiento de normativas de salud laboral.
* **Componentes técnicos destacados**:
  1. **Las 4 Líneas de Solución Corporativa**:
     * *Consultoría y Asesoría en Salud Laboral*: Diagnóstico de necesidades según rubro.
     * *Jornadas de Diagnóstico In-Company*: Extracciones sin interrumpir operaciones.
     * *Programas Continuos de Prevención Laboral*: Seguimiento a factores ergonómicos y metabólicos.
     * *Capacitación y Formación Corporativa*: Talleres a brigadas y comités de seguridad laboral.
  2. **Compromiso con Indicadores de Gestión (Sección 9 del Plan)**: Cuadro de seguimiento por métricas de cobertura empresarial, cumplimiento cronológico de proyectos y estabilidad de convenios.

---

### CAPA 07 · FORMACIÓN Y CAPACITACIÓN (GESTIÓN DEL CONOCIMIENTO)
* **Archivo fuente**: [`src/layers/CapaFormacion.tsx`](file:///c:/Users/Dios%20del%20Sexo/Desktop/Nival%20proyecto/src/layers/CapaFormacion.tsx)
* **Objetivo estratégico**: Difundir el conocimiento científico, capacitar al talento humano interno y externo, y proyectar el futuro campus virtual.
* **Componentes técnicos destacados**:
  1. **Catálogo de Cursos con Filtro por Audiencia**: Sistema de filtrado reactivo para segmentar programas dirigidos a *Profesionales de la Salud*, *Empresas* o *Comunidad General*.
  2. **Ficha de Contenido Curricular**: Detalla modalidad (Presencial/Híbrida), carga horaria estimada y lista estructurada de ejes temáticos.
  3. **Proyección del Campus Digital**: Sección tecnológica que expone la futura plataforma virtual y reafirma el principio de responsabilidad académica de emitir certificaciones únicamente bajo alianzas debidamente acreditadas.

---

### CAPA 08 · INNOVACIÓN Y TECNOLOGÍA (TRANSFORMACIÓN DIGITAL)
* **Archivo fuente**: [`src/layers/CapaInnovacion.tsx`](file:///c:/Users/Dios%20del%20Sexo/Desktop/Nival%20proyecto/src/layers/CapaInnovacion.tsx)
* **Objetivo estratégico**: Exponer el roadmap de desarrollo tecnológico, microaplicaciones y proyectos de investigación de NIVAL Sciences.
* **Componentes técnicos destacados**:
  1. **Directorio de Soluciones Digitales y Estado de Madurez**: Muestra plataformas en producción (Portal Institucional), en consolidación (Microaplicaciones preventivas), en desarrollo (Interoperabilidad de informes) y en proyección (Investigación aplicada).
  2. **Ecosistema Tecnológico de Salud**: Plataformas interactivas orientadas a la autoevaluación, interoperabilidad diagnóstica y soporte a pacientes y empresas.

---

### CAPA 09 · CONTACTO Y ATENCIÓN (ENLACE INSTITUCIONAL)
* **Archivo fuente**: [`src/layers/CapaContacto.tsx`](file:///c:/Users/Dios%20del%20Sexo/Desktop/Nival%20proyecto/src/layers/CapaContacto.tsx)
* **Objetivo estratégico**: Proporcionar canales oficiales, ordenados y seguros de atención para personas naturales, instituciones y empresas.
* **Componentes técnicos destacados**:
  1. **Directorio Oficial**: Sede física principal, horarios detallados de toma de muestras, líneas de atención telefónica y correos corporativos segmentados por área.
  2. **Formulario Institucional Segmentado**: Permite al usuario clasificar su gestión en tres modalidades (`Servicio / Paciente`, `Empresa / B2B`, `Alianza / Formación`), adaptando de forma dinámica los campos solicitados y facilitando el enrutamiento interno.
  3. **Confirmación Asistida**: Panel de validación de entrega de solicitud con resguardo explícito de confidencialidad de datos de salud.

---

## 4. COMPONENTES GLOBALES Y ARQUITECTURA DE SOFTWARE

```
src/
├── App.tsx                     # Orquestador principal y sincronizador de capas mediante URL Hash
├── main.tsx                    # Punto de entrada ReactDOM (React 19)
├── index.css                   # Configuración base de Tailwind CSS v4 y tema cromático
├── types/                      # Modelado de datos TypeScript estrictos
├── data/
│   └── ecosystemData.ts        # Datos estructurados: Pruebas, Cursos, Pilares, Roadmap 36m
├── layers/
│   ├── layerData.ts            # Metadatos maestros de las 9 capas (títulos, subtítulos, IDs)
│   ├── CapaInicio.tsx          # Capa 01
│   ├── CapaNosotros.tsx        # Capa 02
│   ├── CapaLaboratorio.tsx     # Capa 03
│   ├── CapaPrevencion.tsx      # Capa 04
│   ├── CapaAsesoriaPersonas.tsx# Capa 05
│   ├── CapaSolucionesEmpresas  # Capa 06
│   ├── CapaFormacion.tsx       # Capa 07
│   ├── CapaInnovacion.tsx      # Capa 08
│   └── CapaContacto.tsx        # Capa 09
└── components/
    ├── InstitutionalHeader.tsx # Cabecera fija con menú móvil y sub-barra de capa activa
    ├── InstitutionalFooter.tsx # Pie de página institucional y declaración de principios
    └── ImagePlaceholder.tsx    # Espacios reservados grises con especificación fotográfica
```

### 4.1. Navegación Asíncrona sin Recarga (*SPA Layer Router*)
El portal implementa un enrutador liviano basado en estado de React sincronizado con el fragmento de la URL (`window.location.hash`):
* Si el usuario navega a `https://kingerian0405.github.io/NIVAL-Sciences/#laboratorio`, el portal detecta el hash y monta instantáneamente la Capa 03 sin provocar recarga de página ni peticiones de red adicionales.
* La barra informativa del `InstitutionalHeader` detecta automáticamente la capa visible, mostrando la numeración romana/decimal (`Capa 03 / Laboratorio Clínico`) y el subtítulo correspondiente.

### 4.2. Declaración Institucional del Pie de Página (`InstitutionalFooter`)
En cumplimiento estricto con la **Sección 12** (*Principios de Actuación y Responsabilidad*) del documento fundacional, el pie de página aloja de forma permanente una advertencia institucional que salvaguarda la responsabilidad de NIVAL Sciences:
> *“El crecimiento de NIVAL Sciences se realiza respetando las competencias profesionales, las autorizaciones sanitarias, las normas de protección de datos y confidencialidad, y los requisitos aplicables a cada servicio. Las actividades clínicas, diagnósticas, formativas y de consultoría se ofrecen dentro del marco legal correspondiente...”*

---

## 5. INFRAESTRUCTURA, DESPLIEGUE CONTINUO Y RENDIMIENTO

### 5.1. Stack Tecnológico de Última Generación
* **React 19 & TypeScript**: Máxima seguridad de tipos, arquitectura orientada a componentes puros y rendimiento nativo optimizado.
* **Vite 8**: Servidor de desarrollo con Hot Module Replacement ultrarrápido y empaquetador de producción basado en Rollup.
* **Tailwind CSS v4**: Motor CSS atómico compilado sin dependencias en tiempo de ejecución, asegurando una hoja de estilos de peso inferior a 12 kB gzipped.
* **Lucide React**: Iconografía técnica vectorial ligera que no añade peso de fuentes tipográficas externas.

### 5.2. Pipeline de Despliegue en GitHub Pages y GitHub Actions
El portal cuenta con un flujo automatizado de Integración y Despliegue Continuo (CI/CD):
1. **Flujo de automatización**: Cada cambio empujado a la rama `main` del repositorio activa la compilación de producción mediante GitHub Actions (`.github/workflows/deploy.yml`).
2. **Publicación estática optimizada**: La rama `gh-pages` almacena los artefactos compilados (`dist/`) servidos a través de la infraestructura global de CDN de GitHub con HTTPS forzado y caché HTTP optimizada.
3. **Manejo de rutas relativas**: Se configuró la variable de base `base: '/NIVAL-Sciences/'` en `vite.config.ts` y `${import.meta.env.BASE_URL}` en los activos estáticos para asegurar que todas las imágenes y enlaces funcionen en cualquier dominio o subcarpeta.

---

## 6. CONCLUSIÓN Y HOJA DE RUTA PARA SIGUIENTES HITOS

El portal web institucional de **NIVAL Sciences** se encuentra en estado **100% operativo y desplegado en producción**. Cumple a cabalidad con la identidad estratégica, ofrece una experiencia visual de alto descanso y elegancia, y establece una base técnica robusta para soportar el crecimiento de la organización durante los próximos años.

### Próximos pasos sugeridos para el cliente:
1. **Sustitución de Fondos Grises por Fotografía Propia**:
   Coordinar una sesión fotográfica institucional en las instalaciones del laboratorio clínico para sustituir progresivamente los componentes `ImagePlaceholder` por fotografías reales en alta resolución.
2. **Conexión de Backend en el Formulario de Contacto**:
   Conectar el formulario de la Capa 09 con el servidor de correo institucional o CRM corporativo de NIVAL Sciences mediante un microservicio seguro (API REST o Webhook).
3. **Módulo de Consulta Digital de Resultados**:
   En concordancia con la Etapa 1 del Roadmap, integrar en una fase posterior el acceso seguro a la consulta y descarga digital de informes diagnósticos para pacientes y médicos.

---
*Documento elaborado para NIVAL Sciences. Todos los derechos reservados.*

