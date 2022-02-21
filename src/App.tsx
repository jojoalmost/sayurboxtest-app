import React from 'react';

const Pages = React.lazy(() => import('./modules/Pages'))

function App() {
    return (
        <div className="App">
            <React.Suspense fallback={(<div>loading</div>)}>
                <Pages/>
            </React.Suspense>
        </div>
    );
}

export default App;
