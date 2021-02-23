function getDbConfig(env) {
  const config = {
    "development": {
      "username": "root",
      "password": "harryjack1214",
      "database": "pantryDB",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "harryjack1214",
      "database": "pantryDB",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "ndp3jxz9p476q85t",
      "password": "a319ypo5kr83o3x8",
      "database": "esbvka1fdiaxi7s2",
      "host": "lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
      "dialect": "mysql"
    }
  };

  return config[env];
}

module.exports = getDbConfig;
