// Helpers
import getRandomInt from "@/helpers/getRandomInt";

const incrementRandomInit = async ({ commit }) => {
  commit("setLoading", true);
  const randomInt = await getRandomInt();
  commit("incrementBy", randomInt);
  commit("setLoading", false);
};

export { incrementRandomInit };
