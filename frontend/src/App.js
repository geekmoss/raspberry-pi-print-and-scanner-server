import React from 'react';
import { Container } from "semantic-ui-react";
import ScanForm from "./components/ScanForm";
import Files from "./components/Files";


function App() {
    return (
        <div className="App">
            <Container>
                <h1>Scanner</h1>
                <div>
                    <ScanForm />
                </div>

                <h2>Files</h2>
                <Files />

            </Container>
        </div>
    );
}

export default App;
