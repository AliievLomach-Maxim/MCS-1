import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllUsersApi } from '../../api/users'

export const getUsersThunk = createAsyncThunk('getAll/users', () => getAllUsersApi())
