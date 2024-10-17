import pickle
import pandas as pd

def recommend(movie):
    movie_index = movies[movies['title'] == movie].index[0]
    distances = similarity[movie_index]
    movies_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:6]
    recommended_movies = [movies.iloc[i[0]].title for i in movies_list]
    return recommended_movies

if __name__ == "__main__":
    # Manually specify the full path to the .pkl files as raw strings
    movies_dict_path = r'D:\Code\Web Development\project\Full stack\Film Flicker\server\utils\movie_dict.pkl'  # Use raw string for the movie_dict.pkl file
    similarity_path = r'D:\Code\Web Development\project\Full stack\Film Flicker\server\utils\similarity.pkl'   # Use raw string for the similarity.pkl file

    # Load the movie dataset and similarity matrix
    movies_dict = pickle.load(open(movies_dict_path, 'rb'))
    movies = pd.DataFrame(movies_dict)
    similarity = pickle.load(open(similarity_path, 'rb'))

    # Input the movie name (Superman Returns in this case)
    movie_name = "Superman Returns"

    # Call the recommend function and get the recommendations
    recommendations = recommend(movie_name)

    # Print the recommendations so that the Node.js process can capture them
    for movie in recommendations:
        print(movie)
