# SingleplayerData
Represents the integrated server(singleplayer server).(can be accessed from `ModAPI.sp.(methods/properties)`)

properties:
- `IPC_CHANNEL`
- `PLAYER_CHANNEL`
- `statusState`
- `loggingState`
- `worldStatusString`
- `worldStatusProgress`
- `isPaused: Boolean`
- `integratedServerTPS`
- `integratedServerLastTPSUpdate`

methods:
- `isIntegratedServerWorkerStarted(): Boolean`
- `startIntegratedServerWorker(): void`
- `isIntegratedServerWorkerAlive(): Boolean`
- `isReady(): Boolean`