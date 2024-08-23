import axios from "axios";

const URLBaseSpotifyAPI = "https://api.spotify.com/v1/";

const URLPostBackNode = "http://localhost:4000/";


export const API = axios.create({
  baseURL: URLBaseSpotifyAPI,
});

export const APIPostBack = axios.create({
  baseURL: URLPostBackNode,
});

