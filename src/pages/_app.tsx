import { AuthProvider } from "@/contexts/AuthContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react/jsx-runtime";
import { Toaster } from "sonner";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/illustrations/nav-logo.png"
          type="image/x-icon"
        />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
        <Toaster />
      </AuthProvider>
    </Fragment>
  );
}
