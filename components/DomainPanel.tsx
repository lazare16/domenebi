import styles from '../styles/DomainPanel.module.scss';
import Domain from '../components/Domain';
import { domains } from './DomainsData';

export default function DomainPanel() {
  const domainCount = domains.length; // Number of Domain components

  const domainPanelHeight = 140 * domainCount;

  return (
    domainCount > 0 && (
      <div
        className={styles.domainPanel}
        style={{ height: `${domainPanelHeight}px` }}
      >
        {domains.slice(0, domainCount).map((domain, index) => (
          <div style={{ height: '140px' }} key={index}>
            {/* Pass the entire domain object as props */}
            <Domain
              isLast={index === domainCount - 1}
              {...domain}
            />
          </div>
        ))}
      </div>
    )
  );
}

