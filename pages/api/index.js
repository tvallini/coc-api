//import clashApi from 'clash-of-clans-api';
const clashApi = require('clash-of-clans-api');

const COC_API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZmMzE5ZDRjLThiYTMtNDg2Yy04MGM3LTg1ZGQ2MjllODQwYSIsImlhdCI6MTYyMjI0MTg4NSwic3ViIjoiZGV2ZWxvcGVyLzc0MGNkMjUwLWU2MjMtM2QxOS1jZDk2LTJmZDQ5NGRhN2E2YiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4MS4xNzAuNjguMjUyIl0sInR5cGUiOiJjbGllbnQifV19.LqOLy_7CSGX1MmclejKGhbBCBVoPVVMRpG5irKoDA7BxFZhYqzoiCE0QKSivBFCN16LiQp16SSnnKum-oz_x7A';

let client = clashApi({
  token: COC_API_TOKEN
});

async function showClanByTag(tag) {
  try {
    const ClanByTag = await client.clanByTag(tag)
    console.log("this is the player info:", ClanByTag)

  } catch (error) {
    console.error(error)
  }
}

showClanByTag('#YPY0G9LQ');