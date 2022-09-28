import React, { Component } from 'react';
import MovieList from './MovieList';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('/api/movies')
            .then(res => res.json())
            .then(movies => this.setState({ movies: movies.data }))
            .catch(err => console.error(err))
        ;
    }

    render() { 
        return(
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
                
                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        this.state.movies.map((movie, index) => {
                                            return <MovieList {...movie} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>            
            </React.Fragment>
        )
    }
}
 
export default Movie;