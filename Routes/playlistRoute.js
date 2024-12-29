import { createPlaylist, getPlaylists, getOnePlaylist } from "../Controller/playlistController.js";
import { Router } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';
import { config as configDotenv } from "dotenv";

configDotenv();

const PlaylistRoute = Router();

const jwtCheck = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
  });


// GET
PlaylistRoute.get("/:playlistId", getOnePlaylist)

// POST
PlaylistRoute.post("/all", jwtCheck ,getPlaylists )

PlaylistRoute.post("/", jwtCheck, createPlaylist )


export default PlaylistRoute
