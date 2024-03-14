
ServerEvents.recipes(event => {

    event.shapeless('2x minecraft:string', [
        '3x #minecraft:saplings',
        '#minecraft:swords'
    ]).damageIngredient('#minecraft:swords');

    event.shapeless('2x minecraft:cobblestone', [
        '4x kubejs:stone_pebble',
    ]);

    event.shapeless('2x minecraft:andesite', [
        '4x kubejs:andesite_pebble',
    ]);

    event.shapeless('2x minecraft:diorite', [
        '4x kubejs:diorite_pebble',
    ]);

    event.shapeless('2x minecraft:granite', [
        '4x kubejs:granite_pebble',
    ]);

    event.shapeless('gtceu:wood_plate', [
        '3x #minecraft:wooden_slabs'
    ]);

});