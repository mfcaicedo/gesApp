# GesApp project
Personal project focused on the automation of manual processes carried out by community action boards of various rural communities and neighborhoods. 
## App features:
- User management of different roles.
- Family management.
- Event management.
- Adjustment of accounts for each person in the community (Refers to giving a report of people with debts either for not attending events, among other cases).
- Notification management.
- Membership book management.
-  Reports. 
## Folder structure 
Organize files based on the features or functionalities. 
- src/screens: Contains individual application screens.
- src/components: Stores reusable UI components.
- src/utils: Holds utility functions or helper modules.
- src/assets: Houses images, fonts, and other static resources.
- src/navigation: Includes navigation-related files.
## State management
1. React Context API: React Context is a built-in feature that allows you to share state across the component tree without manually passing props. 
It provides a simple way to create a global state that can be accessed by any component in your app. While suitable for small to medium-sized applications, 
the Context API might become less performant for large-scale applications due to potential unnecessary re-renders.
2. Redux: Redux is a predictable state container that provides a centralized store to manage application state. 
It follows a unidirectional data flow and uses actions and reducers to manage state updates. 
Redux provides a clear separation between data and presentation layers, making it suitable for large-scale applications with complex state management needs. 
Redux can be used with React Native through the react-redux library.
3. MobX: MobX is a state management library that emphasizes simplicity and flexibility. 
It allows you to create observables that automatically track and update state changes. 
MobX offers a more intuitive programming model compared to Redux, as it eliminates the need for explicit actions and reducers. 
MobX works well with React Native and can be integrated using the mobx-react library.
