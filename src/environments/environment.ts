// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://www.googleapis.com/books/v1/volumes',
  apiKey: 'AIzaSyBlo7SOulKQegfEp0859uMefuQwJfdAwqc',
  firebaseConfig: {
    apiKey: 'AIzaSyCW4pY6Y9yaDEm2GV8yk2Eal2ItbRMMhg4',
    authDomain: 'books-a3173.firebaseapp.com',
    projectId: 'books-a3173',
    storageBucket: 'books-a3173.appspot.com',
    messagingSenderId: '762344242526',
    appId: '1:762344242526:web:b75bdb3c40b14e16a963cf'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
