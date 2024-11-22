import {readData, writeData} from './shared.mjs'

const FILENAME = 'add-data'

async function run() {
  const data = (await readData(FILENAME)) ?? {}
  data.add = (data.add || 0) + 1
  console.debug(data)
  await writeData(FILENAME, data)
}

void run()
