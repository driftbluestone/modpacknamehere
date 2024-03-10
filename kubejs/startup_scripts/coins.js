StartupEvents.registry('item', event => {
    event.create('pre_elec_coin').displayName(`Pre-Electrical Pennies`)
    event.create('electrical_coin').displayName(`Electrical Euros`)
    event.create('storage_mod_coin').displayName(`Storage Mod Shillings`)
    event.create('magic_coin').displayName(`Magical Money`)
});