GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('sieve')
        .category('sieve')
        .setEUIO('in')
        .setMaxIOSize(3, 6, 1, 2) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('kinetic_sieve')
        .category('sieve')
        .setEUIO('in')
        .setMaxIOSize(3, 6, 1, 2) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)
})
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('steam_sieve')
        .category('sieve')
        .setEUIO('in')
        .setMaxIOSize(3, 6, 1, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('sieve', 'simple',
    GTValues.LV,
    GTValues.MV,
    GTValues.HV,
    GTValues.EV,
    GTValues.IV,
    GTValues.LuV,
    GTValues.ZPM,
    GTValues.UV,
    GTValues.UHV,
    GTValues.UEV,
    GTValues.UIV,
    GTValues.UXV,
    GTValues.OpV,
    GTValues.MAX)
        .recipeType('sieve', true, true)
        .tankScalingFunction(tier => tier * 8000)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer("gtceu:block/machines/sifter");
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('kinetic_sieve', 'kinetic', GTValues.ULV)
        .recipeType('kinetic_sieve', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer("gtceu:block/machines/sifter");
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('lp_steam_sieve', 'steam', false)
    .recipeType('steam_sieve', true, true)
    .tankScalingFunction(tier => tier * 8000)
    .rotationState(RotationState.NON_Y_AXIS)
    .workableSteamHullRenderer(false, "gtceu:block/machines/sifter")
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hp_steam_sieve', 'steam', true)
    .recipeType('steam_sieve', true, true)
    .tankScalingFunction(tier => tier * 8000)
    .rotationState(RotationState.NON_Y_AXIS)
    .workableSteamHullRenderer(true, "gtceu:block/machines/sifter")
})  
