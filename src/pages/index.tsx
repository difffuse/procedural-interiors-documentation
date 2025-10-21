import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/intro"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderColor: 'var(--ifm-color-primary)',
              color: 'var(--ifm-color-primary-darkest)',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
            Get Started
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/installation/download-install"
            style={{
              marginLeft: '1rem',
              backgroundColor: 'var(--ifm-color-primary)',
              borderColor: 'var(--ifm-color-primary-darker)',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
            Download & Install
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Procedural Interior Generator Add-on for Blender`}
      description="Description of the add-on goes here">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
