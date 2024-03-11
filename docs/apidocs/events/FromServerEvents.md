# Receiving packet events
Events called by packets being received from the server by the client.
### NOTE : these are the only packets as of v1.2.4 and more packets will be added in later versions


- `packetchat`
    Called when the server sends a chat message packet. Passes an object with properties:
    - `type`: Byte indicating the type of chat message.
    - `chat`: String representing the content of the chat message.
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.
    - NOTE: The chat text length must be different in order for your changes to propagate.

- `packetsoundeffect`
    - `soundName`: String
    - `posX`: Integer
    - `posY`: Integer
    - `posZ`: Integer
    - `soundVolume`: Number
    - `soundPitch`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.