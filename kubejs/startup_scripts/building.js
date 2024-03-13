const colors = [
    'Pure Red',
    'Pure Green',
    'Pure Blue',
    'Drift Blue',
    'Ourple',
    'Pure Yellow',
    'Pure Orange',
    'Pure White',
    'Pure Black'
];

StartupEvents.registry('block', event => {
    for (const element of colors) {
        event.create(`${element.toLowerCase().replace(' ', '_')}_stone`)
        .displayName(`${element} Stone`)
        .tagBlock("pure_color_stones")
        .material("stone")
        .hardness(1.0)
        .resistance(1.0)
    }
});