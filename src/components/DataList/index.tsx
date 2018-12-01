import * as React from 'react';
import {Link} from 'react-router-dom';

export class DataList extends React.Component<any> {

    constructor(props: any, context?: any) {
        super(props, context);
    }

    public render() {
        const {data} = this.props;

        if (!data) {
            return (
                <div className="list-preview">Loading...</div>
            );
        }

        if (data.length === 0) {
            return (
                <div className="list-preview">
                    No articles are here... yet.
                </div>
            );
        }

        return (
            <div>
                <ul>
                    {
                        data.map((pokemon: any, key: number) => {
                            const splitData = pokemon.url.split('/');
                            pokemon.number = splitData[splitData.length - 2];
                            pokemon.imageName = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`;
                            return (
                                <div className="data-preview" key={`${pokemon.name}${key}`}>
                                    <Link className="pokemon" to={{ pathname: `/pokemon/${pokemon.number}`, state: { url: pokemon.url} }}>
                                        <li>
                                            <div className="info">
                                                {pokemon.name}
                                                <img src={pokemon.imageName} alt={pokemon.name}/>
                                            </div>
                                        </li>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
