import Head from "next/head";

type TProps = {
  title?: string;
};

const PageHead = ({ title = "LuxeMist" }: TProps) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
};

export default PageHead;
