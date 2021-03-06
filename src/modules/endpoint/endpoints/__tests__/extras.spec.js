import extras from '../extras'
import ExtraModel from '../../models/ExtraModel'

jest.unmock('../extras')

describe('extras', () => {
  const pageJson = [
    {
      name: 'Serlo ABC',
      alias: 'serlo-abc',
      url: 'https://abc-app.serlo.org/',
      post: null,
      thumbnail: 'some_thumbnail'
    },
    {
      name: 'Sprungbrett',
      alias: 'sprungbrett',
      url: 'https://web.integreat-app.de/proxy/sprungbrett/app-search-internships?location=augsburg',
      post: null,
      thumbnail: 'some_other_thumbnail'
    }]

  const extraModels = [
    new ExtraModel({
      alias: 'serlo-abc',
      thumbnail: 'some_thumbnail',
      title: 'Serlo ABC',
      path: 'https://abc-app.serlo.org/'
    }),
    new ExtraModel({
      alias: 'sprungbrett',
      thumbnail: 'some_other_thumbnail',
      title: 'Sprungbrett',
      path: 'https://web.integreat-app.de/proxy/sprungbrett/app-search-internships?location=augsburg'})
  ]

  const params = {city: 'bad-toelz', language: 'en'}

  it('should map router to url', () => {
    expect(extras.mapParamsToUrl(params)).toEqual(
      'https://cms.integreat-app.de/bad-toelz/en/wp-json/extensions/v3/extras'
    )
  })

  it('should throw if the city to map the url are missing', () => {
    expect(() => extras.mapParamsToUrl({})).toThrowErrorMatchingSnapshot()
  })

  it('should throw if the language to map the url are missing', () => {
    expect(() => extras.mapParamsToUrl({city: 'city'})).toThrowErrorMatchingSnapshot()
  })

  it('should map json to models', () => {
    const disclaimerModel = extras.mapResponse(pageJson)
    expect(disclaimerModel).toEqual(extraModels)
  })
})
