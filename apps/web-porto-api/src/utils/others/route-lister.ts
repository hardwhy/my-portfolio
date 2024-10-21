export function listRoutes(app) {
  console.log('Available routes:');
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      // Routes registered directly on the app
      const methods = Object.keys(middleware.route.methods).map((m) =>
        m.toUpperCase()
      );
      console.log(`${methods.join(', ')} ${middleware.route.path}`);
    } else if (middleware.name === 'router') {
      // Routes registered on a router
      middleware.handle.stack.forEach((handler: any) => {
        const methods = Object.keys(handler.route.methods).map((m) =>
          m.toUpperCase()
        );
        console.log(`${methods.join(', ')} ${handler.route.path}`);
      });
    }
  });
}
