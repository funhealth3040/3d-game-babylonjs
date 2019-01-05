import * as React from 'react';
import { Accounts } from 'meteor/accounts-base';
import {
  EuiFlexGroup, EuiFlexItem, EuiButton, EuiPage, EuiSpacer,
  EuiPageBody, EuiPageHeader,  EuiPageContent, EuiPageContentBody, EuiTitle
} from '@elastic/eui';
import * as BBL from 'babylonjs';

import { RootState } from '../startup/client/store';
import { withLink } from '../api/links.tracker';
import PageWithScene from './pages/babylonjs/PageWithScene'

interface InfoProps {
  loading: boolean
}

class Info extends React.Component<InfoProps, any> {

  onLogout = () => {
    Accounts.logout();
  }

  render() {
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
              <EuiFlexGroup justifyContent="spaceBetween">
                <EuiFlexItem grow={1} style={{ paddingLeft: 20 }}>
                  <EuiTitle size="m"><h1>BabylonJS</h1></EuiTitle>
                </EuiFlexItem>
                <EuiFlexItem style={{ maxWidth: 130, paddingRight: 30 }}>
                  <EuiButton style={{ maxWidth: 100 }} onClick={this.onLogout}>Log out</EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentBody>
              <PageWithScene></PageWithScene>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}

const mapProps = (state: RootState) => ({
  
});

export default withLink(mapProps, Info);
