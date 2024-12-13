# playlist
## Server
Flask
| API     | downladMusic() | uploadMusic() |setList(UUID)|getList(UUID)|
| --------| --------       | --------        |--------     |--------     |
| Ref     | MusicFile      | MusicFile       |PlayList     |PlayList     |
> Playlist on server is not for long-stay

## Applocation
React+Vite+TailWind

* HomePage
    * list slector
        * local playlist file
    * create list
        * setList(UUID)
        * uploadMusic()
    * import list
        * getList(UUID)
        * downloadMusic()