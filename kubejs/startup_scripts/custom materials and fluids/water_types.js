
StartupEvents.registry("fluid", (event) => {

  // why not use GT material generation????
  event.create('muddy_water')
    .thickTexture(0x964B00)
    .bucketColor(0x964B00)
    .displayName('Muddy Water')
    .noBlock()

  event.create('heavy_water')
    .thickTexture(0x2389da)
    .bucketColor(0x2389da)
    .displayName('Heavy Water')
    .noBlock()

  event.create('tritiated_water')
    .thickTexture(0x0f5e9c)
    .bucketColor(0x0f5e9c)
    .displayName('Tritiated Water')
    .noBlock()

  event.create('wastewater')
    .thickTexture(0x964B00)
    .bucketColor(0x964B00)
    .displayName('Wastewater')
    .noBlock()

  event.create('polluted_water')
    .thickTexture(0x964B00)
    .bucketColor(0x964B00)
    .displayName('Polluted Water')
    .noBlock()
})