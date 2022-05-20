import Client from '../src/GuideClient'

describe('Base Client Test', () => {
  let koalityGuideClient
  let guide: any
  beforeEach(async () =>{
    koalityGuideClient = new Client('md')
    guide = await koalityGuideClient.getGuide('_demo.md.elements', 'en')
  })
  it('must be english language', async () => {
    expect(guide.getLanguage()).toEqual('en')
  })

  it('found a button in metainformation', () => {
    expect(guide.getMetaInformation()).toHaveProperty('buttons')
  })
})
