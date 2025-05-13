const initialState = {
  categories: {},
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CATEGORY': {
      const { email, category } = payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          [email]: {
            ...(state.categories[email] || {}),
            [category]: state.categories[email]?.[category] || [],
          }
        }
      };
    }

    case 'ADD_TODO': {
      const { email, category, text } = payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          [email]: {
            ...(state.categories[email] || {}),
            [category]: [
              ...(state.categories[email]?.[category] || []),
              { text, completed: false },
            ],
          },
        },
      };
    }

    case 'TOGGLE_TODO': {
      const { email, category, index } = payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          [email]: {
            ...(state.categories[email] || {}),
            [category]: state.categories[email][category].map((todo, i) =>
              i === index ? { ...todo, completed: !todo.completed } : todo
            ),
          },
        },
      };
    }

    case 'REMOVE_TODO': {
      const { email, category, index } = payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          [email]: {
            ...(state.categories[email] || {}),
            [category]: state.categories[email][category].filter((_, i) => i !== index),
          },
        },
      };
    }

    default:
      return state;
  }
};
