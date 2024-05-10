import { create } from 'zustand'
import { redux } from 'zustand/middleware'
import reducer, { initialState } from './reducer';

export default create( redux( reducer, initialState ) );



