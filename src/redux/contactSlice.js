const { createSlice } = require('@reduxjs/toolkit');

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const contactReducer = contactSlice.reducer;
export const { addContact, removeContact, updateFilter } = contactSlice.actions;
