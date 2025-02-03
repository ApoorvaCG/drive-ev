import { promises as fs } from "fs";
import path from "path";

export async function getEvData() {
  const filePath = path.join(process.cwd(), "src", "mock", "data.json");
  const file = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(file);
  const dataWithIds = data.data?.map((item, index) => ({
    id: index + 1,
    ...item,
  }));
  return dataWithIds;
}

export const getEvById = async (params) => {
  const evs = await getEvData();
  const ev = evs.find((item) => item.id === Number(params));
  return ev;
};

export const getFilteredEvs = async (params) => {
  const evs = await getEvData();

  const filteredEVs = evs?.filter((ev) => {
    const matchesSearch =
      ev.brand.toLowerCase().includes(params.toLowerCase()) ||
      ev.model.toLowerCase().includes(params.toLowerCase());
    return matchesSearch;
  });

  return filteredEVs;
};
