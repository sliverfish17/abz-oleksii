import { Loader, RegistrationForm, SuccessMessage } from 'components';
import { Heading } from 'components/Heading/Heading';
import { useUsersContext } from 'context/UserContext';
import { useEffect, useState } from 'react';
import { getPositions } from 'services/getPositions';
import { IPosition } from 'types';

import styles from './Registration.module.scss';

export const Registration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [positions, setPositions] = useState<IPosition[]>([]);
  const { triggerRefetch } = useUsersContext();

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const positionsData = await getPositions();
        setPositions(positionsData);
      } catch (error) {
        console.error('Error fetching positions:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPositions();
  }, []);

  if (isLoading) return <Loader />;

  if (!positions.length)
    return (
      <section id="sign-up">
        <Heading className={styles.registration__fallback}>
          Currently we don&apos;t have any positions!
        </Heading>
      </section>
    );

  if (isSuccess) return <SuccessMessage />;

  return (
    <section id="sign-up" className={styles.registration}>
      <Heading className={styles.registration__heading}>Working with POST request</Heading>
      <RegistrationForm
        positions={positions}
        setIsSuccess={setIsSuccess}
        triggerRefetch={triggerRefetch}
      />
    </section>
  );
};

export default Registration;
