const increment = (state) => {
  state.count++;
  state.lastMutation = "increment";
};
const incrementBy = (state, val) => {
  state.count += val;
  state.lastMutation = "incrementBy" + " " + val;
  state.lastRandomInt = val;
};
const setLoading = (state, val) => {
  state.isLoading = val;
  state.lastMutation = "setLoading" + " " + val;
};

export { increment, incrementBy, setLoading };
