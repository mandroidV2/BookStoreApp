# Book Store Mobile App

### steps to run the app
iOS
```
npm install
cd ios && pod install && cd ..
npx react-native run-ios
```
Android
```
npm install
npx react-native run-android
```

### Features in the app

- Browse by Book Title
- Browse by Book Author
- Sarch book
- Paginated Data of books
- Book details page

### Structure of the app
- `api` -> contains apis
- `assets` -> contains image and fonts
- `components` -> contains common components
- `connectors` -> contains page connector HOCs
- `constants` -> contains constant files
- `formatters` -> contains custom formatter files
- `navigator` -> contains navigation container and routes
- `pages` -> contains app screens
- `shared` -> contains app entities for complete app (also includes all the helpers, readers and domain logic for the entity)
- `store` -> contains redux global state logic
- `styles` -> contains global styles
- `utils` -> contains utility functions
