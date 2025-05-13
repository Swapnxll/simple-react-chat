# Socket.io?

Socket.IO is a JavaScript library that enables real-time,
bidirectional communication between web clients (browsers)
and servers. It simplifies the process of building interactive web
applications by allowing data to be transmitted instantly and
continuously between the client and server, facilitating features
like chat applications, live updates, and multiplayer gaming.

# io.on('connection', callback)

io.on is a method used to register event listeners for different events
that occur on the server-side. The io object represents the main
Socket.IO server instance.

When we call io.on('connection', callback), we're telling Socket.IO
to listen for a connection event, which occurs whenever a new client
establishes a connection with the server. The callback function will
be called/invoked whenever this event occurs, and it will receive a
socket object representing the connection to the client.

Similarly, we can use socket.on on the socket object to listen for
events specific to that individual client connection.

# Emitting Events

Emitting events allows us to send data from one side
(client or server) to the other. It's a fundamental feature
of real-time communication.
