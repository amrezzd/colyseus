import Clock, { Delayed } from '@gamestdio/timer';

// Core classes
export { Server, ServerOptions } from './Server';
export { Room, RoomInternalState } from './Room';
export { Protocol, ErrorCode, getMessageBytes } from './Protocol';
export { RegisteredHandler } from './matchmaker/RegisteredHandler';
export { ServerError } from './errors/ServerError';

// MatchMaker
import * as matchMaker from './MatchMaker';
export { matchMaker };
export { updateLobby, subscribeLobby } from './matchmaker/Lobby';
export * from './matchmaker/drivers';

// Transport
export { Client, ClientState, Transport, ISendOptions } from './Transport';

// Presence
export { Presence } from './presence/Presence';
export { LocalPresence } from './presence/LocalPresence';
export { RedisPresence } from './presence/RedisPresence';

// Serializers
export { FossilDeltaSerializer } from './serializer/FossilDeltaSerializer';
export { SchemaSerializer } from './serializer/SchemaSerializer';

// Utilities
export { Clock, Delayed };
export { nonenumerable as nosync } from 'nonenumerable'; // TODO: remove me on 1.0.0 (FossilDelta stuff)
export { generateId, Deferred, spliceOne } from './Utils';

// Debug
export { debugMatchMaking, debugPatch, debugError, debugConnection, debugAndPrintError } from './Debug';

// Default rooms
export { LobbyRoom } from './rooms/LobbyRoom';
export { RelayRoom } from './rooms/RelayRoom';
