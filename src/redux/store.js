import { configureStore } from '@reduxjs/toolkit'
import reduxRoleReducer from './project/reduxRole'
import reduxUsersReducer from './project/reduxUsers'
import reduxUserReducer from './project/reduxUser'

export const store = configureStore({
  reducer: {
    reduxRole: reduxRoleReducer,
    reduxUsers: reduxUsersReducer,
    reduxUser:reduxUserReducer
  },
})