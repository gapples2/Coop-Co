function runAuto(a) {
    switch(a) {
        case 0:
            for(let i = 0; i < 10; i++)
                purchaseResearch(i)
            break
        case 1: 
            for(let i = 10; i < 20; i++)
                purchaseResearch(i)
            break
        case 2:
            if(data.money.gte(eggUnlockReq))
                promoteEgg()
            break
    }
}
const autoNames = ['Tier I-V Auto','Tier VI-X Auto','Promotion Auto']
function updateAutomation() {
    for(let i = 0; i < data.autoActive.length; i++) {
        if(data.autoActive[i]) runAuto(i)
    }
    if(data.currentTab === 1) {
        for(let i = 0; i < 2; i++) {
            DOMCacheGetOrSet(`auto${i}`).style.display = data.epicResearch[6+i].gte(epicResearchMaxLevel[6+i]) ? 'inline-block' : 'none'
            DOMCacheGetOrSet(`auto${i}`).classList = data.autoActive[i] ? 'unlockedResearch' : 'lockedResearch'
            DOMCacheGetOrSet(`auto${i}`).innerHTML = data.autoActive[i] ? `${autoNames[i]}: On` : `${autoNames[i]}: Off`
        }
    }
    else if(data.currentTab === 4)
        DOMCacheGetOrSet('auto2').style.display = data.epicResearch[9].gte(epicResearchMaxLevel[9]) ? 'inline-block' : 'none'
        DOMCacheGetOrSet(`auto2`).classList = data.autoActive[2] ? 'unlockedResearch' : 'lockedResearch'
        DOMCacheGetOrSet(`auto2`).innerHTML = data.autoActive[2] ? `${autoNames[2]}: On` : `${autoNames[2]}: Off`
}

for(let i = 0; i < data.autoActive.length; i++) {
    DOMCacheGetOrSet(`auto${i}`).addEventListener('click', () => { data.autoActive[i] = !data.autoActive[i] })
}