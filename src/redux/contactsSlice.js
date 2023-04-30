import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },

    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
    },

    setFiltered: (state, { payload: filter }) => {
      state.filter = filter;
    },
  },
});

export const { addContacts, deleteContacts, setFiltered } =
  contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
