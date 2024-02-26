import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "./components/NavBar.jsx"
export default function Document() {
  return (
    <Html lang="en">

      
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Open+Sans:wght@300;500&display=swap" rel="stylesheet"/>
      </Head>
      <NavBar/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
