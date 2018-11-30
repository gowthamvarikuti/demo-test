import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {getSinglePokemon} from '../../actions';

class DataPreview extends React.Component<any, any> {
    constructor(props: any, context?: any) {
        super(props, context);
    }

    public componentDidMount() {
        this.props.getSinglePokemon(this.props.location.state.url);
    }

    public render() {
        if (this.props.data && this.props.data.reducer.pokemonData) {
            const formData = this.props.data.reducer.pokemonData.forms;
            return (
                <div>
                    Preview Single Pokemon
                    <form>
                        {
                            formData.map((data: { name: string, url: string }, key: number) => {
                                return (
                                    <div key={key}>
                                        <label>
                                            Name:
                                            <input type="text" value={data.name}/>
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </form>
                </div>
            );
        } else {
            return <div>Loading....................</div>;
        }
    }
}

const mapStateToProps = (state: any) => {
    return {
        data: state
    }
};

const matchDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    getSinglePokemon,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(DataPreview)