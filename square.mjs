import {readData, writeData} from './shared.mjs'

async function run() {
  const data = await readData()

  if (data.square == null || data.square > 1000000) {
    data.square = 2
  } else {
    data.square = data.square ** 2
  }

  await writeData(data)
}

void run()
