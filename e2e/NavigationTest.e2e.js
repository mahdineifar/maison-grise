describe('Test navigation', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should navigate when when swiping', async () => {
    await expect(element(by.text('Dernières vidéos'))).toBeVisible();

    await element(by.text('Dernières vidéos')).swipe('left', 'slow', 0.7, 0.75, 0.5);
    await expect(element(by.text('Boîte des émotions'))).toBeVisible();

    await element(by.text('Boîte des émotions')).swipe('left', 'fast', 0.3, 0.5, 0.5);
    await expect(element(by.text('Members Screen'))).toBeVisible();

    await element(by.text('Members Screen')).swipe('right', 'fast', 0.4, 0.2, 0.5);
    await expect(element(by.text('Boîte des émotions'))).toBeVisible();
  });

  it('should navigate when pressing tab bar', async () => {
    await element(by.id('MembersTabTestId')).tap();
    await expect(element(by.text('Members Screen'))).toBeVisible();

    await element(by.id('VideosTabTestId')).tap();
    await expect(element(by.text('Dernières vidéos'))).toBeVisible();

    await element(by.id('FeelingsTabTestId')).tap();
    await expect(element(by.text('Boîte des émotions'))).toBeVisible();
  });

});
