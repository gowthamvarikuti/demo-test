import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {Pock} from '../../actions';
import {DataList} from '../../components';

class Main extends React.Component<any, any> {
    constructor(props: any, context?: any) {
        super(props, context);
    }

    public componentDidMount() {
        this.props.Pock();
    }

    public render() {
        if (this.props.data && this.props.data.reducer && !this.props.data.reducer.result.length) {
            return (<div>Loading.............</div>);
        } else {
            return (
                <div>
                    Main Page

                    <DataList
                        data={this.props.data.reducer.result}/>

                </div>
            );
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        data: state
    }
};

const matchDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    Pock,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Main)