import App from "./App";
import PropTypes from "prop-types";

const AppSSR = ({ bootstrapCSS }) => {
  console.log("Rendering App component on server side");
  return (
    <html>
      <head>
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>React 18 SSR</title>
        {bootstrapCSS.map((cssPath) => (
          <link key={cssPath} rel="stylesheet" href={cssPath}></link>
        ))}
      </head>
      <body>
        <div id="root">
          <App />
        </div>
      </body>
    </html>
  );
};

AppSSR.propTypes = {
  bootstrapCSS: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AppSSR;
