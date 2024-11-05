import { Container, Header, Hero, Registration, Users } from 'components';

function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Container>
          <Hero />
          <Users />
          <Registration />
        </Container>
      </main>
    </>
  );
}

export default App;
