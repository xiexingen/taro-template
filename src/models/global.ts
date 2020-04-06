export default {
  namespace: 'global',
  state: {},
  effects: {},
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
