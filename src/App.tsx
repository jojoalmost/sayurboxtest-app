import React from 'react';
import {ApolloProvider} from "@apollo/client";
import client from "./graphql/client";
import Loading from "./components/Loading";

const Pages = React.lazy(() => import('./modules/Pages'))

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <React.Suspense fallback={(<Loading/>)}>
                <Pages/>
            </React.Suspense>
        </ApolloProvider>
    );
}

export default App;
