It is simple boilerpalte for React app.

to build dev version:
npm start

This project conteins:

1. React as View
2. Redux as Model
3. Jest and Enzyme for unit testing
4. Cypress for E2E testing
5. Server Side Rendering

Materials and useful links:

1. https://medium.com/nuances-of-programming/%D0%BA%D0%B0%D0%BA-%D1%81-%D0%BD%D1%83%D0%BB%D1%8F-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BD%D0%B0-react-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-webpack-4-%D0%B8-babel-172c256d228
2. to install sass loader :
   a) https://catalin.me/how-to-fix-node-js-gyp-err-cant-find-python-executable-python-on-windows/
   under admin:
   npm install --global --production windows-build-tools
   npm install -g node-gyp
   npm install --unsafe-perm -g node-sass (may be it is not nessessary)
   Delete your \$HOME/.node-gyp directory and try again (may be it is not nessessary)
   b) in package.json: npm i node-sass@latest
3. https://redux.js.org/recipes/server-rendering#server-rendering for SSR with redux
4. for 7th task it was nessessery to do: npm install --save-dev "babel-core@^7.0.0-bridge.0"
