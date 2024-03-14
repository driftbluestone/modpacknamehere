ServerEvents.recipes(event => {

    event.shaped('minecraft:brush', [
        ' BB',
        ' AB',
        'A  '   
    ],{
        A: 'minecraft:stick',
        B: 'minecraft:string',
    });

    event.shaped('cobblefordays:tier_1', [
        'AAA',
        'BDC',
        'AAA'
    ],{
        A: '#minecraft:logs',
        B: 'minecraft:water_bucket',
        D: 'minecraft:lava_bucket',
        E: 'minecraft:glass'
    });

});




