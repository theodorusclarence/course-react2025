import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import '@/styles/globals.css';
import theme from '@/styles/theme';
import { css, Global } from '@emotion/react';

const GlobalStyle = ({ children }) => {
    return (
        <>
            <CSSReset />
            <Global
                styles={css`
                    html {
                        min-width: 360px;
                        scroll-behavior: smooth;
                    }
                    #__next {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                    }
                `}
            />
            {children}
        </>
    );
};

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </AuthProvider>
        </ChakraProvider>
    );
}

export default MyApp;
