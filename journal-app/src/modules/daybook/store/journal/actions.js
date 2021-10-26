import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");

  const entries = [];

  for (const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  const { picture, text, date } = entry;
  await journalApi.put(`/entries/${entry.id}.json`, {
    date,
    picture,
    text,
  });
  commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
  const { picture, text, date } = entry;
  const dateToSave = { picture, text, date };

  const { data } = await journalApi.post(`entries.json`, {
    picture,
    text,
    date,
  });

  dateToSave.id = data.name;

  commit("addEntry", dateToSave);
  return data.name;
};
