import React from 'react';
import './../style.scss';
import Home from './home';

const App =() => (
    <div>
        <Home />
    </div>
);

export default App;


// export default class extends React.Component {
//   static async getInitialProps({ req }) {
//     const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//     return { userAgent }
//   }
//   render() {
//     return (
//       <div>
//         Hello World {this.props.userAgent}
//         <Link href="/time">
//             <a>Click me</a>
//         </Link>
//       </div>
//     )
//   }
// }