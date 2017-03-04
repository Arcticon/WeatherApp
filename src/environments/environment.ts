// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  APP_ID: "17686e49eed56c343fe6106c44a232ed",
  backendURL: "http://arcticon.de:1337/",
  // backendURL: "http://localhost:1337/",
  backendURLApartment: "apartment",
  backendURLLogin: "login",
  backendURLLogout: "logout",
  backendURLUser: "user",
};
