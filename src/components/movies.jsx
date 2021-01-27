import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    // this.setState({movies: movies});
    console.log(movie);
  };
  render() {
    const { length: count } = this.state.movies;
    // deleting a movie. this.state.movies === 0 we used object destructuring for the property length
    if (count === 0) return <p>There are no movies left the database</p>;
    return (
      // showing the number of movies
      <React.Fragment>
        <p>Showing {count} movies left in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                {/* in order to pass an argument(movie we to use an arrow function) */}
                <td
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
