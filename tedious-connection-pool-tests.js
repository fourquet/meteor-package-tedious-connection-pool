if (Meteor.isServer) {
  Tinytest.add('Tedious - defined on server', function(test) {
    test.notEqual(Tedious, undefined, 'Expected ' +
      'Tedious to be defined on the server.');
  });
  Tinytest.add('TediousConnectionPool - defined on server', function(test) {
    test.notEqual(TediousConnectionPool, undefined, 'Expected ' +
      'TediousConnectionPool to be defined on the server.');
  });
}

if (Meteor.isClient) {
  Tinytest.add('Tedious - undefined on client', function(test) {
    Tedious = Tedious || undefined;
    test.isUndefined(Tedious, 'Expected Tedious ' +
      'to be undefined on the client.');
  });
  Tinytest.add('TediousConnectionPool - undefined on client', function(test) {
    TediousConnectionPool = TediousConnectionPool || undefined;
    test.isUndefined(TediousConnectionPool, 'Expected TediousConnectionPool ' +
      'to be undefined on the client.');
  });
}
