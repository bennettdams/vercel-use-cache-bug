export type User = {
  id: string;
  name: string;
};

function readUsers() {
  const fs = require("fs");
  const path = require("path");
  const filePath = path.join(process.cwd(), "src", "data", "users.txt");

  try {
    const dataRaw: string = fs.readFileSync(filePath, "utf-8");
    const data = dataRaw.split("\n").map((line: string) => {
      const [id, name] = line.split("-");
      return { id, name };
    });

    return data;
  } catch (err) {
    console.error(err);
  }
}

function writeUser() {
  const fs = require("fs");
  const path = require("path");
  const filePath = path.join(process.cwd(), "src", "data", "users.txt");

  try {
    const numOfExistingUsers = readUsers()?.length;
    if (numOfExistingUsers === undefined)
      throw new Error("Failed to read users");

    const name = numOfExistingUsers % 2 === 0 ? "user" : "admin";

    fs.appendFileSync(filePath, `\n${numOfExistingUsers + 1}-${name}`);
    console.log(`ID ${numOfExistingUsers + 1} added`);
  } catch (err) {
    console.error(err);
  }
}

function resetUsers() {
  const fs = require("fs");
  const path = require("path");
  const filePath = path.join(process.cwd(), "src", "data", "users.txt");

  try {
    fs.writeFileSync(filePath, "1-Alice\n2-Bob");
    console.log("Users reset");
  } catch (err) {
    console.error(err);
  }
}

export const db = {
  readUsers,
  writeUser,
  resetUsers,
};
