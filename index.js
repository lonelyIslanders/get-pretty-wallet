const ethers = require('ethers');
const targetAddress = '0xf2A02FF3b6959a4CD3f0776d663DBdBfbA136c73'
const targetAddress2 = '0x0477820a562b521a3E3872E306a1CF1EcC501FA8'
const target = '0xf2A02FF3b6959a4CD3f0';
const fs = require('fs')
const testTarget = '0xf2A'

async function main() {
    const wallet = ethers.Wallet.createRandom();
    for (let i = 22; i >= 6; i--) {
        if (wallet.address.substring(0, i) == targetAddress.substring(0, i) ||
            wallet.address.substring(0, i) == targetAddress2.substring(0, i)) {
            await writeFun(wallet);
        }
    }
}


async function writeFun(data) {
    return new Promise((res, rej) => {
        fs.appendFile('result.txt', JSON.stringify(data) + '\n', (err) => {
            if (err) {
                console.log(err);
                rej(err)
            } else {
                res()
            }
        })
    })
}


setInterval(async () => {
    await main()
}, 0);