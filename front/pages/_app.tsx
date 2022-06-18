import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";

import { lightTheme } from "../themes";

import { CartProvider } from "../context/cart/CartProvider";
import { UiProvider } from "../context/ui/UiProvider";
//import { AuthProvider } from "../context/auth/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}>
        <CartProvider>
          <UiProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UiProvider>
        </CartProvider>
      </SWRConfig>
    </SessionProvider>
  );
}

export default MyApp;
