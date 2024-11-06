import { Container, Header, Hero, Users } from 'components';
import { UsersProvider } from 'context/UserContext';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';

const Registration = lazy(() => import('./components/Registration/Registration'));

function App() {
  return (
    <UsersProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <main id="home">
        <Container>
          <Hero />
          <Users />
          <Registration />
        </Container>
      </main>
    </UsersProvider>
  );
}

export default App;
