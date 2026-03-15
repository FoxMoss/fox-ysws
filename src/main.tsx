import { ComponentInstance, type FC } from "dreamland/core";
import { Route, Router } from "dreamland/router";

function App(this: FC<{ url?: string }, { el: ComponentInstance<any> }>) {
  let title = "Fox YSWS";

  return (
    <>
      <div id="app">
        <Router initial={this.url ? [this.url, "http://127.0.0.1:5173"] : []}>
          <Route show={() => import("./homepage").then((r) => <r.default />)} />
        </Router>
      </div>
      <>
        <title attr:innerText={title}></title>
        <meta property="og:title" content={title} />
      </>
    </>
  );
}

export default async (url?: string) => <App url={url} />;
