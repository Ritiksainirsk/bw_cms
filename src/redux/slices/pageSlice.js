import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPage: null,
  template: null,
  loading: false,
  error: null
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearPageData: (state) => {
      state.selectedPage = null;
      state.template = null;
      state.error = null;
    }
  }
});

export const { 
  setSelectedPage, 
  setTemplate, 
  setLoading, 
  setError,
  clearPageData 
} = pageSlice.actions;

// Thunk action creator
export const fetchTemplateData = (templateId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));

    const response = await fetch(`http://localhost:4001/api/templates/${templateId}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch template');
    }

    if (!data || !data.data) {
      throw new Error('Invalid template data received');
    }

    dispatch(setTemplate(data.data));
    return data.data;
  } catch (error) {
    dispatch(setError(error.message));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};

export default pageSlice.reducer;
