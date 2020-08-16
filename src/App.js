import React from 'react';
import './App.css';
import Header from "./components/Header";
import PreviewCard from "./components/PreviewCard";
import Spinner from "./components/Spinner";
import SearchInput from "./components/Search/SearchInput";
import useLinkPreview from './hooks/useLinkPreview';
import Alert from "./components/Alert";

function App() {
  const [{loading, data, error}, handleSearch] = useLinkPreview();

  return (
    <React.Fragment>
      <Header/>
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Url Preview</h1>
            <p className="lead text-muted">Search the url & checkout its preview</p>
              <SearchInput onChange={handleSearch}/>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {loading && <Spinner/>}
              {error && <Alert text={error.message} />}
              {!loading && data && <PreviewCard title={data.title} description={data.description} image={data.image} url={data.url}/>}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
