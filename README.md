# playlist
## Server
Flask
| API     | downloadMusic()| uploadMusic()   |setList(UUID)|getList(UUID)|getIfListChange(UUID)|deviceInit()|
| --------| --------       | --------        |--------     |--------     |--------             |--------    |
| Ref     | MusicFile      | MusicFile       |PlayList     |PlayList     |Boolean              |DeviceName  |
> Playlist on server will not last forever.
> It will automatically be deleted when every device have this playlist and are up to date.
## Application
Tauri + React + Tailwind

* HomePage
    * list selector
        * local playlist file
    * create list
        * setList(UUID)
        * uploadMusic()
        * deviceInit(DeviceName)
    * import list
        * getList(UUID)
        * downloadMusic()
        * deviceInit(DeviceName)
    * change list
        * setList(UUID)
        * uploadMusic()
* background stuff
    * getIfListChanged(UUID) > every 10 min
        * true
            * getList(UUID)
            * if there is new music > downloadMusic()
            * if some music was removed > deleteMusic()
