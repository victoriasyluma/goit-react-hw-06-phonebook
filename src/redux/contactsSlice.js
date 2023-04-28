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

    setFilteredContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(payload)
      );
    },
  },
});

export const { addContacts, deleteContacts, setFilteredContacts } =
  contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
