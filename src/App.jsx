import React from 'react';

  function App() {
    const documents = [
      { title: 'Documento 1', url: '/documento1.pdf' },
      { title: 'Documento 2', url: '/documento2.pdf' },
    ];

    return (
      <div>
        <h1>Sistema de Gestión de Documentos</h1>
        {documents.map((doc) => (
          <div key={doc.title}>
            <h3>{doc.title}</h3>
            <iframe src={doc.url} width="800" height="600" title={doc.title} />
          </div>
        ))}
      </div>
    );
  }

  export default App;
