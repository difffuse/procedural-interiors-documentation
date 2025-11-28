import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Png: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Procedural Generation',
    Png: require('@site/static/img/ProcGen.png').default,
    description: (
      <>
        Procedurally generate complete interior spaces with room layouts,
        Parametric architectural elements and Furniture Presets. Save hours of manual modeling.
      </>
    ),
  },
  {
    title: 'Easy User Interface',
    Png: require('@site/static/img/Easy UI.png').default,
    description: (
      <>
        Seamlessly integrated into Blender&apos;s interface with intuitive panels and controls.
        Works with your existing workflow and supports all Blender features.
      </>
    ),
  },
  {
    title: 'Customizable Assets',
    Png: require('@site/static/img/ProcAssets.png').default,
    description: (
      <>
        Extensive library of furniture, fixtures, and architectural elements.
        Parametric controls let you adjust dimensions, materials, and styles to match your vision.
      </>
    ),
  },
];

function Feature({title, Png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Png} className={styles.featureSvg} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
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
