import axios from "axios";

const URLBaseSpotifyAPI = "https://api.spotify.com/v1/"

export const API = axios.create({
  baseURL: URLBaseSpotifyAPI,
});

