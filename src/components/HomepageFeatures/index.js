import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Interfaz intuitiva y accesible para desarrolladores de todos los niveles. 
        Herramientas integradas para inspeccionar y modificar el DOM y estilos CSS en tiempo real.
      </>
    ),
  },
  {
    title: 'Compatibilidad multiplataforma',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Funciona en Chrome, Firefox, Edge y Safari (mediante extensiones o integración nativa).
        Soporte para aplicaciones móviles (React Native) y SPAs (Single Page Apps).        
      </>
    ),
  },
  {
    title: 'Edicion en tiempo real',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Permite ajustar CSS, HTML y propiedades directamente desde el inspector.
        Cambios reflejados al instante sin necesidad de recargar la página.
        Ideal para prototipado rápido y ajustes de diseño.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={`featureSection ${styles.features}`}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
