import fs from "fs";
import path from "path";
import { runTypeChain } from "typechain";
import { TestAbi } from "../test/TestAbi";

main();
async function main() {
  const generatedFolder = path.join(__dirname, "..", "test", "generated");
  fs.rmSync(generatedFolder, { force: true, recursive: true });
  fs.mkdirSync(generatedFolder, { recursive: true });
  const testAbiPath = path.join(generatedFolder, "TestAbi.json");
  fs.writeFileSync(testAbiPath, JSON.stringify(TestAbi));
  const files = [testAbiPath];
  await runTypeChain({
    cwd: process.cwd(),
    allFiles: files,
    filesToProcess: files,
    outDir: path.join(generatedFolder, "typechain"),
    target: "ethers-v5",
  });
  fs.rmSync(testAbiPath);
}
