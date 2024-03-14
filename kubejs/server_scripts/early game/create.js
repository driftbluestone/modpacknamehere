
ServerEvents.recipes(event => {

    event.shaped('create:andesite_casing', [
        ' A ',
        'ABA',
        ' A '
    ],{
        A: 'createdeco:andesite_sheet',
        B: '#forge:stripped_logs'
    });

    event.shaped('create:andesite_casing', [
        ' A ',
        'ABA',
        ' A '
    ],{
        A: 'createdeco:andesite_sheet',
        B: '#forge:stripped_wood'
    });

    event.shaped('create:andesite_casing', [
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'create:andesite_alloy',
        B: '#forge:stripped_logs'
    });

    event.shaped('create:andesite_casing', [
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'create:andesite_alloy',
        B: '#forge:stripped_wood'
    });

    event.shaped('kubejs:andesite_machine_hull', [
        'ABA',
        'CDC'
    ],{
        A: 'gtceu:wood_plate',
        B: 'createdeco:andesite_sheet',
        C: 'create:shaft',
        D: 'create:andesite_casing'
    });

    event.recipes.create.sequenced_assembly(['create:andesite_casing'], ['#forge:stripped_logs'], [
        event.recipes.create.deploying(['minecraft:stripped_oak_log'], ['minecraft:stripped_oak_log', 'createdeco:andesite_sheet'])])
      .transitionalItem('minecraft:stripped_oak_log').loops(2);
      
    event.recipes.create.sequenced_assembly(['create:andesite_casing'], ['#forge:stripped_wood',], [
        event.recipes.create.deploying(['minecraft:stripped_oak_log'], ['minecraft:stripped_oak_wood', 'createdeco:andesite_sheet'])])
      .transitionalItem('minecraft:stripped_oak_wood').loops(2);
    
})