import extend from 'dva-model-extend';

export default function(model: object) {
  return extend(
    {
      reducers: {
        update(state, { payload }) {
          return {
            ...state,
            ...payload,
          };
        },
      },
    },
    model
  );
}
