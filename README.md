# react-redux-workshop
Best practice in development with React JS with Vít Jouda
[http://slides.com/vitjouda/sqn-react-workshop](http://slides.com/vitjouda/sqn-react-workshop)

## Notes @ondrejhudek

### NPM packages
- nodemon
- concurrently
- babel pluginy (babel.config.js)
- recompose

### Interestings
- Webpack / module bundler
   - tree shaking (require/import, cuts imports)
   - side effects flag
- [Swagger](https://github.com/swagger-api/swagger-js) (OpenApi3) / api
- [Storybook](https://github.com/storybooks/storybook) / component development
- [HOC](https://reactjs.org/docs/higher-order-components.html) 
- [Next.js](https://github.com/zeit/next.js/)
- [ramda](https://github.com/ramda/ramda)
- [axios](https://github.com/axios/axios)
- [redux](https://github.com/reduxjs/redux) (reducers, selectors - good for caching)
   - [flux-standard-action](https://github.com/redux-utilities/flux-standard-action)
   - [redux-actions](https://github.com/redux-utilities/redux-actions)
   - [redux-api-middleware](https://github.com/agraboso/redux-api-middleware)
   - [redux-saga](https://github.com/redux-saga/redux-saga)
   - [react-waterfall](https://github.com/didierfranc/react-waterfall)
   - [rematch](https://github.com/rematch/rematch)
   - [redux-form](https://github.com/erikras/redux-form)
      - can use with [ValidateJS](https://github.com/ansman/validate.js)
   - { connect }
- progressive apps
    - also works in offline (localStorage, cache & servis-workes)
    - should work Chrome on Android, in Chrome on desktop with flag (Desktop PWAs)
    - hopefully will be on iOS
    - good and quick start
    - webpack plugins ([offline-plugin](https://github.com/NekR/offline-plugin))
- propTypes
- styling: [BEM](https://github.com/getbem/getbem.com/), [JSS](https://github.com/cssinjs/jss) (nativaly used in Material-UI), [styled-components](https://github.com/styled-components/styled-components)
- testing
    - [enzyme](https://github.com/airbnb/enzyme) (shallow, mount, render)
    - snapshots (against TDD, diffs, good for reducers)
