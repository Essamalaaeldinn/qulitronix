import { globalErrorHandler } from "../Middleware/error-handler.middleware.js";
import authController from "../Modules/Auth/auth.controller.js";
import userController from "../Modules/User/user.controller.js";
import subscriptionController from "../Modules/Subscription/subscription.controller.js"; 

const routerHandler = (app) => {
    app.use('/auth', authController);
    app.use('/user', userController);
    app.use('/subscription', subscriptionController); 

    // Error handling middleware
    app.use(globalErrorHandler);
};

export default routerHandler;
