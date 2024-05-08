import { configureStore , combineReducers} from '@reduxjs/toolkit'; // Importe la fonction configureStore de Redux Toolkit pour configurer le magasin Redux Importe la fonction combineReducers de Redux Toolkit pour combiner plusieurs réducteurs en un seul
import { authReducer } from './reducers/auth.reducer.jsx';

import { userReducer } from './reducers/user.reducer.jsx';

// Combine les réducteurs en un seul réducteur racine
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})

// Configure le magasin Redux avec le réducteur racine et les outils de développement activés
const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

// Exporte le magasin configuré par défaut pour être utilisé dans d'autres parties de l'application
export default store
