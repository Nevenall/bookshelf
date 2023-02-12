import fs from 'fs/promises'
import { compile, preprocess } from 'svelte/compiler'


let source = await fs.readFile('src/book/03 Gearing Up.html')

var result = compile(source.toString())

var s = ''