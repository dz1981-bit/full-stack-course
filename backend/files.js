import { writeFileSync, readFileSync } from 'node:fs'
const users = [
  { name: 'Adam Ondra', email: 'adam.ondra@climb.ing' },
  { name: 'Bill Boogie', email: 'bboggie@climb.ing' },
  { name: 'Pat Mahomes', email: 'p.mahomes@climb.ing' },
  { name: 'John Deere', email: 'johnd13@climb.ing' },
  { name: 'John Denver', email: 'denver@climb.ing' },
]
const usersJson = JSON.stringify(users)
writeFileSync('backend/users.json', usersJson)
const readUsersJson = readFileSync('backend/users.json')
const readUsers = JSON.parse(readUsersJson)
console.log(readUsers)
