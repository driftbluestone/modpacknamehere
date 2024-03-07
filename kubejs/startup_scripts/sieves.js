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
  StartupEvents.registry("fluid", (event) => {
    event.create('muddy_water')
    .thickTexture(0x964B00)
    .bucketColor(0x964B00)
    .displayName('Muddy Water')
    .noBlock()
  })
  StartupEvents.registry("fluid", (event) => {
    event.create('heavy_water')
    .thickTexture(0x2389da)
    .bucketColor(0x2389da)
    .displayName('Heavy Water')
    .noBlock()
  })
  StartupEvents.registry("fluid", (event) => {
    event.create('tritiated_water')
    .thickTexture(0x0f5e9c)
    .bucketColor(0x0f5e9c)
    .displayName('Tritiated Water')
    .noBlock()
  })
  StartupEvents.registry("fluid", (event) => {
    event.create('wastewater')
    .thickTexture(0x964B00)
    .bucketColor(0x964B00)
    .displayName('Wastewater')
    .noBlock()
  })
  StartupEvents.registry("fluid", (event) => {
    event.create('polluted_water')
    .thickTexture(0x964B00)
    .bucketColor(0x964B00)
    .displayName('Polluted Water')
    .noBlock()
  })