import Client from '../src/GuideClient'

describe('Base Client Test', () => {
  let koalityGuideClient
  let guide: any
  beforeEach(async () =>{
    koalityGuideClient = new Client('md')
    guide = await koalityGuideClient.getGuide('html.deadlink.404', 'de')
  })
  it('must be german language', async () => {
    expect(guide.getLanguage()).toEqual('de')
  })

  it('if the there a content', () => {
    expect(guide.getText()).toContain('Was bedeutet ein Fehler mit dem Code 404 (Nicht gefunden)?')
  })
})
