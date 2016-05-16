import angular from 'angular';

// Create the home module where our functionaity can attach to
let authModule = angular.module('app.auth', []);

// Include our UI-Router config settings
import AuthConfig from './auth.config';

// Controllers
import AuthCtrl from './auth.controller';
authModule.controller('AuthCtrl', AuthCtrl);

export default authModule;
