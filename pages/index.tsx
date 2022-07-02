import type { NextPage } from 'next';
import Link from 'next/link';
import Button from '../src/components/Button/Button';
import { Container } from '../styles/homepage';

const Home: NextPage = () => {
  return (
    <Container>
      <div>
        <Button>
          <Link href="/admin">
            <a>CONTINUE AS ADMIN</a>
          </Link>
        </Button>
        <Button>
          <Link href="/admin">
            <a> CONTINUE AS WORKER</a>
          </Link>
        </Button>
        <Button>
          <Link href="/customer">
            <a>CONTINUE AS CUSTOMER</a>
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default Home;
