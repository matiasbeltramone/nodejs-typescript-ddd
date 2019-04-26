import {
  createConnection,
  ConnectionManager,
  getConnectionManager,
  Connection
} from 'typeorm';

export default class DatabaseConnection {
  private connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  public async getConnection() {
    const CONNECTION_NAME = 'default';

    let connection: Connection;

    if (this.connectionManager.has(CONNECTION_NAME)) {
      connection = await this.connectionManager.get(CONNECTION_NAME);

      if (!connection.isConnected) {
        console.log('Reconnect default connection...');
        connection = await connection.connect();
      }

      return connection;
    }

    return await createConnection();
  }
}
