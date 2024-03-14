const colors = [
    'Pure_red',
    'Pure_green',
    'Pure_blue',
    'Drift_blue',
    'Purple',
    'Pure_yellow',
    'Pure_orange',
    'Pure_white',
    'Pure_black'
];

StartupEvents.registry('block', event => {
    for (const element of colors) {
        event.create(`${element.toLowerCase()}_stone`)
            .displayName(`${element} Stone`)
            .tagBlock("pure_color_stones")
            .material("stone")
            .hardness(1.0)
            .resistance(1.0)
    }
});