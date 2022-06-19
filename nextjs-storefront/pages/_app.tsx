import '../styles/global.css'
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { request, gql } from "graphql-request";
import { store } from '@/store/store';
import { Provider } from 'react-redux'
const queryClient = new QueryClient();

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </QueryClientProvider>
    )
}

export const endpointGraphql = "http://localhost:8000/graphql/";
