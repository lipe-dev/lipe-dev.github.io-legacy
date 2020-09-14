import Layout from "../components/layout/layout";
import Heading from "../components/heading";
import Social from "../components/social/social";

export default function Chat() {
  return (
    <Layout>
      <div className="container mx-auto">
        <Heading
          subtitle="Want to hire me, talk tech stuff or trade cute dog pictures? Reach
          out!"
        >
          Reach out
        </Heading>

        <div className="m-8 p-8 text-center">
          <Social bottom cards />
        </div>
      </div>
    </Layout>
  );
}
