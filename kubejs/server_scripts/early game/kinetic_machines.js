
ServerEvents.recipes(event => {

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
        
    });

    event.shaped('gtceu:ulv_kinetic_crusher', [
        'ABA',
        'GDC',
        'EFE'
    ],{
        A: 'create:shaft',
        B: 'create:mechanical_piston',
        C: 'create:millstone',
        D: 'kubejs:andesite_machine_hull',
        E: 'create:cogwheel',
        F: 'minecraft:anvil',
        G: 'create:mechanical_drill'
    });

    event.recipes.gtceu.kinetic_crusher('cobble_to_gravel')             
        .itemInputs('minecraft:cobblestone')
        .itemOutputs('minecraft:gravel')
        .duration(80)
        .EUt(0)
        .inputStress(1024)
        .rpm(16);

    event.recipes.gtceu.kinetic_crusher('gravel_to_sand')             
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(80)
        .EUt(0)
        .inputStress(1024)
        .rpm(16);

    event.recipes.gtceu.kinetic_crusher('sand_to_dust')             
        .itemInputs('minecraft:sand')
        .itemOutputs('kubejs:dust')
        .duration(80)
        .EUt(0)
        .inputStress(2048)
        .rpm(16);
     
    event.recipes.gtceu.kinetic_crusher('crush_andesite')             
        .itemInputs('minecraft:andesite')
        .itemOutputs('kubejs:crushed_andesite')
        .duration(80)
        .EUt(0)
        .inputStress(1024)
        .rpm(16);

    event.recipes.gtceu.kinetic_crusher('crush_diorite')             
        .itemInputs('minecraft:diorite')
        .itemOutputs('kubejs:crushed_diorite')
        .duration(80)
        .EUt(0)
        .inputStress(1024)
        .rpm(16);

    event.recipes.gtceu.kinetic_crusher('crush_granite')             
        .itemInputs('minecraft:granite')
        .itemOutputs('kubejs:crushed_granite')
        .duration(80)
        .EUt(0)
        .inputStress(1024)
        .rpm(16);

    event.recipes.gtceu.kinetic_crusher('crush_blackstone')             
        .itemInputs('minecraft:blackstone')
        .itemOutputs('kubejs:crushed_blackstone')
        .duration(80)
        .EUt(0)
        .inputStress(2048)
        .rpm(16);

    event.recipes.gtceu.kinetic_crusher('crush_basalt')             
        .itemInputs('minecraft:basalt')
        .itemOutputs('kubejs:crushed_basalt')
        .duration(80)
        .EUt(0)
        .inputStress(2048)
        .rpm(16);

    event.recipes.gtceu.kinetic_crusher('crushed_netherrack')             
        .itemInputs('minecraft:netherrack')
        .itemOutputs('kubejs:crushed_netherrack')
        .duration(80)
        .EUt(0)
        .inputStress(512)
        .rpm(16);

    event.recipes.gtceu.kinetic_crusher('crush_end_stone')             
        .itemInputs('minecraft:end_stone')
        .itemOutputs('kubejs:crushed_end_stone')
        .duration(80)
        .EUt(0)
        .inputStress(4096)
        .rpm(16);

    event.recipes.gtceu.kinetic_squeezer('squeeze_sapling')             
        .itemInputs('#minecraft:saplings')
        .outputFluids(Fluid.of('minecraft:water', 50))
        .duration(80)
        .EUt(0)
        .inputStress(1024)
        .rpm(2);

    event.recipes.gtceu.kinetic_squeezer('squeeze_leaves')             
        .itemInputs('#minecraft:leaves')
        .outputFluids(Fluid.of('minecraft:water', 50))
        .duration(80)
        .EUt(0)
        .inputStress(512)
        .rpm(2);

    event.recipes.gtceu.kinetic_squeezer('squeeze_log')             
        .itemInputs('#minecraft:logs_that_burn')
        .itemOutputs('gtceu:small_wood_dust')
        .outputFluids(Fluid.of('minecraft:water', 25))
        .duration(80)
        .EUt(0)
        .inputStress(4096)
        .rpm(2);

    event.recipes.gtceu.kinetic_squeezer('squeeze_crimson')             
        .itemInputs('minecraft:crimson_stem')
        .itemOutputs('gtceu:small_wood_dust')
        .outputFluids(Fluid.of('minecraft:lava', 50))
        .duration(80)
        .EUt(0)
        .inputStress(4096)
        .rpm(2);

    event.recipes.gtceu.kinetic_squeezer('squeeze_warped')             
        .itemInputs('minecraft:warped_stem')
        .itemOutputs('gtceu:small_wood_dust')
        .outputFluids(Fluid.of('minecraft:lava', 50))
        .duration(80)
        .EUt(0)
        .inputStress(4096)
        .rpm(2);

    event.recipes.gtceu.kinetic_squeezer('squeeze_weeping')             
        .itemInputs('minecraft:weeping_vines')
        .outputFluids(Fluid.of('minecraft:lava', 25))
        .duration(80)
        .EUt(0)
        .inputStress(1024)
        .rpm(2);

    event.recipes.gtceu.kinetic_squeezer('squeeze_twisting')             
        .itemInputs('minecraft:twisting_vines')
        .outputFluids(Fluid.of('minecraft:lava', 25))
        .duration(80)
        .EUt(0)
        .inputStress(1024)
        .rpm(2);

    event.recipes.gtceu.kinetic_squeezer('squeeze_netherrack')             
        .itemInputs('minecraft:netherrack')
        .itemOutputs('gtceu:small_netherrack_dust')
        .outputFluids(Fluid.of('minecraft:lava', 50))
        .duration(80)
        .EUt(0)
        .inputStress(512)
        .rpm(2);

});