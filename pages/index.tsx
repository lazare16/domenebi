// Import the CartCountProvider component from the components directory.
import { CartCountProvider } from '../components/CartCountProvider';

// Import the Head component from the Next.js library.
import Head from 'next/head';

// Import the Header component from the components directory.
import Header from '../components/header';

// Import the SubHeader component from the components directory.
import SubHeader from '../components/SubHeader';

// Import the Main component from the components directory.
import Main from '../components/main';


export default function Home() {

  return (
    <>
      <CartCountProvider>
        <Head>
          <title>Domenebi.ge</title>

          <meta name="description" content="Powered by Lemondo" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <Header />
        <SubHeader />
        <Main />
      </CartCountProvider>
    </>
  );
}