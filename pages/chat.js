import Head from "next/head";

import Layout from "../components/layout/layout";
import Heading from "../components/heading";
import Social from "../components/social/social";

export default function Chat() {
  return (
    <Layout>
      <Head>
        <title>Lipe.dev | Chat</title>
      </Head>
      <div className="container mx-auto pt-4">
        <Heading
          subtitle="Want to hire me, talk tech stuff or trade cute dog pictures? Reach
          out!"
        >
          Reach out
        </Heading>

        <div className="m-8 p-8 text-center">
          <Social bottom cards />
        </div>

        <Heading subtitle="Here are some Sombra and Shock for you.">
          What about the dog pics?
        </Heading>

        <div className="flex flex-wrap items-center mb-8 justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 p-8 sm:p-4">
            <img
              className="w-full h-auto shadow-diagonal transform transition duration-200 hover:scale-150"
              src="/images/dogs/babydogs.jpg"
              alt="baby sombra and shock"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 p-8 sm:p-4">
            <img
              className="w-full h-auto shadow-diagonal transform transition duration-200 hover:scale-150"
              src="/images/dogs/happyshock.png"
              alt="happy shock"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 p-8 sm:p-4">
            <img
              className="w-full h-auto shadow-diagonal transform transition duration-200 hover:scale-150"
              src="/images/dogs/seriousandrelaxed.jpg"
              alt="serious and relaxed"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 p-8 sm:p-4">
            <img
              className="w-full h-auto shadow-diagonal transform transition duration-200 hover:scale-150"
              src="/images/dogs/snacktime.png"
              alt="snack time"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 p-8 sm:p-4">
            <img
              className="w-full h-auto shadow-diagonal transform transition duration-200 hover:scale-150"
              src="/images/dogs/sombersombra.png"
              alt="somber sombra"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
