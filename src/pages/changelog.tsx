import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import {changelogContent} from '../data/changelog-content';
import styles from './changelog.module.css';

export default function Changelog(): ReactNode {
  return (
    <Layout
      title="Changelog"
      description="Changelog for Procedural Interiors">
      <main style={{padding: '2rem 0', maxWidth: '900px', margin: '0 auto'}}>
        <div className="container">
          <Heading as="h1">Changelog</Heading>
          
          <div style={{
            marginTop: '2rem',
          }}>
            <div className={styles.changelogContainer}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h2: ({node, ...props}) => (
                    <h2 style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginTop: '2rem',
                      marginBottom: '1rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid var(--ifm-color-emphasis-300)',
                      fontSize: '1.5rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }} {...props} />
                  ),
                  p: ({node, ...props}) => <p {...props} />,
                  h3: ({node, ...props}) => {
                    const text = typeof props.children === 'string' ? props.children : 
                      (Array.isArray(props.children) ? props.children.join('') : '');
                    
                    let color = 'var(--ifm-color-emphasis-900)';
                    if (text.includes('✨') || text.includes('Added')) {
                      color = 'var(--ifm-color-success)';
                    } else if (text.includes('🔧') || text.includes('Fixed')) {
                      color = 'var(--ifm-color-info)';
                    } else if (text.includes('🔄') || text.includes('Changed')) {
                      color = 'var(--ifm-color-warning)';
                    }
                    
                    return (
                      <h3 style={{
                        color,
                        marginTop: '1rem',
                        marginBottom: '0.5rem',
                        fontSize: '1rem',
                      }} {...props} />
                    );
                  },
                  ul: ({node, ...props}) => (
                    <ul style={{
                      marginLeft: '1.5rem',
                      marginBottom: '1rem',
                    }} {...props} />
                  ),
                  hr: () => (
                    <div style={{
                      margin: '2rem 0',
                      borderBottom: '1px solid var(--ifm-color-emphasis-300)',
                    }} />
                  ),
                }}
              >
                {changelogContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

