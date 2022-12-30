import Musician from "../pages/Music/Music";
import MyMusic from "../pages/MyMusic/MyMusic";
import Focus from "../pages/Focus/Focus";
import FoudMusic from "../pages/FoudMusic/FoudMusic";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/login/Login";
import Layout from "../pages/AppLayout";
import Discover from "../pages/FoudMusic/discover/discover";
import MusicRadio from "../pages/FoudMusic/radio/radio";
import Artists from "../pages/FoudMusic/artists/artists";
import Charts from "../pages/FoudMusic/charts/charts";
import Playlists from "../pages/FoudMusic/playlists/playlists";
import NewAlbums from "../pages/FoudMusic/newAlbums/newAlbums";

const routes = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <FoudMusic/>
            },
            {
                path: '/my',
                element: <MyMusic/>
            }, {
                path: '/focus',
                element: <Focus/>
            }, {
                path: '/store/product',
                element: <Shop/>
            }, {
                path: '/musician',
                element: <Musician/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }, {
        path: '/Discover',
        element: <Discover/>
    }, {
        path: '/MusicRadio',
        element: <MusicRadio/>
    }, {
        path: '/Artists',
        element: <Artists/>
    }, {
        path: '/Charts',
        element: <Charts/>
    }, {
        path: '/Playlists',
        element: <Playlists/>
    }, {
        path: '/NewAlbums',
        element: <NewAlbums/>
    },

]
export default routes
