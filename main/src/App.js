import React from 'react';
import { AppRouter, AppRoute } from '@ice/stark';
import { appHistory } from '@ice/stark-app';
import NotFound from './components/NotFound';
import PageLoading from './components/PageLoading';

export default class App extends React.Component {
  
  handleRouteChange = (pathname) => {
    console.log('route change', pathname);
  }
  
  seller = () => {
    appHistory.push('/seller');
  }

  render() {
    return (
      <div>
        <div onClick={this.seller}>卖家</div>
        <AppRouter
          NotFoundComponent={NotFound}
          LoadingComponent={PageLoading}
          onRouteChange={this.handleRouteChange}
        >
          <AppRoute
            path="/seller"
            title="商家平台"
            url={[
              'http://192.168.190.92:3301/main.js',
            ]}
          />
        </AppRouter>
      </div>
    );
  }
}