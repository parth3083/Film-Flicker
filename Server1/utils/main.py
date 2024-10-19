import pickle
import pandas as pd
import sys

def recommend(movie):
    movie_index = movies[movies['title'] == movie].index[0]
    distances = similarity[movie_index]
    movies_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:6]

    # Add 'id' field to the response along with 'title'
    recommended_movies = [{"title": movies.iloc[i[0]].title, "id": movies.iloc[i[0]]['movie_id']} for i in movies_list]
    return recommended_movies

if __name__ == "__main__":
    # Paths to your .pkl files
    movies_dict_path = r'D:\Code\Web Development\project\Full stack\Film Flicker\Server1\utils\movie_dict.pkl'
    similarity_path = r'D:\Code\Web Development\project\Full stack\Film Flicker\Server1\utils\similarity.pkl'

    # Load the movie dataset and similarity matrix
    movies_dict = pickle.load(open(movies_dict_path, 'rb'))
    movies = pd.DataFrame(movies_dict)
    similarity = pickle.load(open(similarity_path, 'rb'))

    # Get the movie name from command line arguments
    if len(sys.argv) > 1:
        movie_name = sys.argv[1]
    else:
        print("No movie name provided.")
        sys.exit(1)

    # Call the recommend function and get the recommendations
    recommendations = recommend(movie_name)

    # Print the recommendations so that Node.js can capture them
    for movie in recommendations:
        print(f"{movie['title']}|{movie['id']}")
