ServerEvents.recipes(event => {

    event.shaped('minecraft:brush', [
        ' BB',
        ' AB',
        'A  '   
    ],{
        A: 'minecraft:stick',
        B: 'minecraft:string',
    })
    event.shapeless('2x minecraft:string', [
        '3x #minecraft:saplings',
        '#minecraft:swords'
    ]).damageIngredient('#minecraft:swords')
    event.shapeless('2x minecraft:cobblestone', [
        '4x kubejs:stone_pebble',
    ])
    event.shapeless('2x minecraft:andesite', [
        '4x kubejs:andesite_pebble',
    ])
    event.shapeless('2x minecraft:diorite', [
        '4x kubejs:diorite_pebble',
    ])
    event.shapeless('2x minecraft:granite', [
        '4x kubejs:granite_pebble',
    ])
    event.shapeless('gtceu:wood_plate', [
        '3x #minecraft:wooden_slabs'
    ])
    event.shaped('create:andesite_casing', [
        ' A ',
        'ABA',
        ' A '
    ],{
        A: 'createdeco:andesite_sheet',
        B: '#forge:stripped_logs'
    })
    event.shaped('create:andesite_casing', [
        ' A ',
        'ABA',
        ' A '
    ],{
        A: 'createdeco:andesite_sheet',
        B: '#forge:stripped_wood'
    })
    event.shaped('create:andesite_casing', [
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'create:andesite_alloy',
        B: '#forge:stripped_logs'
    })
    event.shaped('create:andesite_casing', [
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'create:andesite_alloy',
        B: '#forge:stripped_wood'
    })
    event.shaped('kubejs:andesite_machine_hull', [
        'ABA',
        'CDC'
    ],{
        A: 'gtceu:wood_plate',
        B: 'createdeco:andesite_sheet',
        C: 'create:shaft',
        D: 'create:andesite_casing'
    })
    event.recipes.create.sequenced_assembly(['create:andesite_casing'], ['#forge:stripped_logs',], [
        event.recipes.create.deploying(['minecraft:stripped_oak_log'], ['minecraft:stripped_oak_log', 'createdeco:andesite_sheet'])
      ]).transitionalItem('minecraft:stripped_oak_log').loops(2)
      event.recipes.create.sequenced_assembly(['create:andesite_casing'], ['#forge:stripped_wood',], [
        event.recipes.create.deploying(['minecraft:stripped_oak_log'], ['minecraft:stripped_oak_wood', 'createdeco:andesite_sheet'])
      ]).transitionalItem('minecraft:stripped_oak_wood').loops(2)

      event.shaped('gtceu:ulv_kinetic_sieve', [
        'ABA',
        'CDC',
        'EBE'
    ],{
        A: 'create:cogwheel',
        B: 'create:filter',
        C: 'create:mechanical_piston',
        D: 'kubejs:andesite_machine_hull',
        E: 'create:shaft'
    })
//broken code i cant figure out :lleettss:
    // event.recipes.gtceu.kinetic_crusher('cobble_to_gravel')             
    // .itemInputs('minecraft:cobblestone')
    // .itemOutputs('minecraft:gravel')
    // .duration(80)
    // .EUt(0)
    // .su(256)
    // .rpm(16)
})


LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("dirt")
        .matchMainHand(Item.of("minecraft:brush").ignoreNBT())
        .addAlternativesLoot(
            LootEntry.of("minecraft:stone_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:andesite_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:diorite_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:granite_pebble").when((c) => c.randomChance(0.5)),
        );
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("grass_block")
        .matchMainHand(Item.of("minecraft:brush").ignoreNBT())
        .addAlternativesLoot(
            LootEntry.of("minecraft:stone_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:andesite_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:diorite_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:granite_pebble").when((c) => c.randomChance(0.5)),
        );
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("gravel")
        .matchMainHand(Item.of("minecraft:brush").ignoreNBT())
        .addAlternativesLoot(
            LootEntry.of("gtceu:crushed_iron_ore").when((c) => c.randomChance(0.10)),
        );
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:cobblestone").matchMainHand(Item.of("kubejs:wooden_hammer").ignoreNBT()).removeLoot("minecraft:cobblestone");
    event.addBlockLootModifier("minecraft:cobblestone").matchMainHand(Item.of("kubejs:wooden_hammer").ignoreNBT()).addLoot("minecraft:gravel");
});

ServerEvents.recipes(event => {
    [
        'minecraft:brush',
        'create:item_application/andesite_casing_from_log_using_deployer',
        'create:item_application/andesite_casing_from_wood_using_deployer',
        'create:item_application/andesite_casing_from_log',
        'create:item_application/andesite_casing_from_wood'
    ].forEach((recipeID) => event.remove({id: recipeID}));
})