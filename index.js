import inquirer from 'inquirer';
import { exec } from 'child_process';
import iconv from 'iconv-lite';
import msg from './message.js'
import Cornm from 'correct-name-core'

const print = console.log;
const cornm = new Cornm('../correct-name/namelist.txt')

print(cornm.q('qzj'))
