/**
 * @jest-environment node
 */
import { getEvData } from "./getEvData"; 
import * as fs from "fs";
import path from "path";

jest.mock("fs", () => ({
    promises: {
      readFile: jest.fn(),
    },
  }));

describe("getEvData", () => {
    beforeEach(() => {
      jest.clearAllMocks(); // Reset mocks before each test
    });
  
    it("fetches EV data correctly", async () => {
      fs.promises.readFile.mockResolvedValue(
        JSON.stringify({ data: [{ name: "Tesla Model S", color: "Red", seats: 5 }] })
      );
  
      const data = await getEvData();
  
      expect(fs.promises.readFile).toHaveBeenCalledWith(
        path.join(process.cwd(), "src", "mock", "data.json"),
        "utf8"
      );
  
      expect(data).toEqual([{ id: 1, name: "Tesla Model S", color: "Red", seats: 5 }]);
    });
  
    it("handles empty data gracefully", async () => {
      fs.promises.readFile.mockResolvedValue(JSON.stringify({ data: [] }));
  
      const data = await getEvData();
  
      expect(data).toEqual([]);
    });
  
    it("throws an error when the file cannot be read", async () => {
      fs.promises.readFile.mockRejectedValue(new Error("File read error"));
  
      await expect(getEvData()).rejects.toThrow("File read error");
    });
  });