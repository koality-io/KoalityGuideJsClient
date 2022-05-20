import Client from '../src/GuideClient'

describe('Base Client Test', () => {
  test('get some base Content', async () => {
    const koalityGuideClient = new Client('md')
    const guide = await koalityGuideClient.getGuide('html.deadlink.404', 'de')
    expect(guide.getLanguage()).toEqual('de')
  })
})
