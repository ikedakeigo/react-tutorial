import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/counter";
import logger from "./middleware/logger";

export default configureStore({
  reducer: {
    counter: reducer
  },
  middleware: (getDefultMiddleware) => getDefultMiddleware().concat(logger)
  // middleware: (getDefultMiddleware) => {
  //   const middlewares = getDefultMiddleware();
  //   console.log(middlewares);
  //   const newMiddlewares = middlewares.concat(logger);
  //   return newMiddlewares;
  // }
});
