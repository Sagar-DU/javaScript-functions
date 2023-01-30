/* 
    Calculate how may wood would be needed if
    wood per chair = 3 cft
    wood per table = 5 cft
    wood per bed = 10 cft
*/

function woodCalculator(chair, table, bed) {
    const woodPerChair = 3, woodPerTable = 5, woodPerBed = 10;
    const chairWood = woodPerChair * chair, talbeWood = woodPerTable * table, bedWood = woodPerBed * bed;
    const totalWood = chairWood + talbeWood + bedWood;
    return totalWood;
}

console.log("Total Wood needed for the furnichers:", woodCalculator(6,1,2));