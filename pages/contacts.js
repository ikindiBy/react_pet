import React from "react";
import Link from "next/link";

import dynamic from 'next/dynamic';
import Loading from '../components/Loading';

const Other = dynamic(() => import('../components/Other'), {
    loading: () => <Loading />
});


class Contacts extends React.Component {
    static async getInitialProps({ req }) {
        const res = await fetch('https://reactjs-cdp.herokuapp.com/movies?search=War&searchBy=title');
        const json = await res.json();
        return { total: json.total };
      }

  render() {
    return (
      <div>
          <h1>Contacts</h1>
          <Other />
          <h3>... total = {this.props.total}</h3>

          <Link href="/">
          <a>Return to home page</a>
        </Link>
      </div>
    );
  }
}

export default Contacts;