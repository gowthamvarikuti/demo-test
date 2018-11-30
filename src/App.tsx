import * as React from 'react';
import {Route, Switch} from 'react-router';
import {Header} from './components/Header';
import DataPreview from './container/DataPreview';
import {Home} from './container/Home';
import Main from './container/Main';

class App extends React.Component {
    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/list" component={Main}/>
                    <Route path="/pokemon/:id" component={DataPreview} />
                </Switch>
            </div>
        );
    }
}

export default App;
