module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  port: '5433',
  username: 'postgres',
  password: 'docker',
  database: 'meetapp',
  define: {
    // esta linha garante que existirá uma coluna de cada
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
