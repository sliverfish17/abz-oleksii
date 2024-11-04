import { Container, Header, Hero, Users } from "components";

function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Container>
          <Hero />
          <Users />
        </Container>
      </main>
    </>
  );
}

export default App;
