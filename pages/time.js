import React from 'react';
import {bindActionCreators} from 'redux';
import Link from 'next/link';
import { initStore, getTime } from '../redux/store';
import withRedux from 'next-redux-wrapper';
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    getTime: bindActionCreators(getTime, dispatch),
  };
}

class Page extends React.Component {
  static async getInitialProps({ req, store }) {
    await store.dispatchPromised(getTime());
    return;
  }
  componentDidMount() {
    this.intervalHandle = setInterval(() => this.props.getTime(), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }
  render() {
    return (
      <div>
        <div>{this.props.time}</div>
        <div>
          <Link href="/">
            <a>Return</a>
          </Link>
        </div>
      </div>
    )
  }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Page);