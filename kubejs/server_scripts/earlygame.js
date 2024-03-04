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
        'minecraft:brush'
    ].forEach((recipeID) => event.remove({id: recipeID}));
})