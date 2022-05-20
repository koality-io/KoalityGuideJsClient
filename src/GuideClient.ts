import axios, {AxiosStatic} from 'axios'
import Guide from './Guide'
import NotFoundError from './NotFoundError'

interface IResponse {
  content: any
  fetchedLanguage: string
}

interface IApiResponse {
  data: any
}

/**
 * This class is used to fetch all guides from the KoalityGuide engine.
 *
 * @author Nils Langner <nils.langner@webpros.com>
 *
 * @created 2021-08-28
 */
export default class GuideClient {
  private readonly format: string
  private readonly baseUrl: string
  private readonly axios: AxiosStatic
  private readonly fallbackLanguage: string

  /**
   * The constructor.
   *
   * @param {string} format
   * @param {string} fallbackLanguage
   */
  constructor(format = 'md', fallbackLanguage = 'en') {
    this.baseUrl = 'https://api.koalityguide.com'
    this.axios = axios
    GuideClient._assertFormatAllowed(format)
    this.format = format
    this.fallbackLanguage = fallbackLanguage
  }

  /**
   * Assert that the given format is valid and known.
   *
   * It will throw an error if the format is not valid.
   *
   * @param {string} format
   * @private
   */
  private static _assertFormatAllowed(format: string) {
    if (format !== 'md') {
      throw new Error(`The given format "${format}" is not allowed. Please use "md".`)
    }
  }

  /**
   * Return a Guide for the given identifier and language.
   *
   * @param {string} identifier
   * @param {string} language
   *
   * @returns {Promise<Guide>}
   */
  async getGuide(identifier: string, language = 'en') {
    const {content, fetchedLanguage} = await this._getGuideText(identifier, language)
    return new Guide(identifier, fetchedLanguage, content.content, content.meta, this.format)
  }

  /**
   * Fetch the guide text from the content server.
   *
   * @param {string} identifier
   * @param {string} language
   * @param {string} primaryLanguage
   *
   * @returns {Promise<object>}
   *
   * @private
   */
  private async _getGuideText(identifier: string, language: string, primaryLanguage = 'en'): Promise<IResponse> {
    const url = `${this.baseUrl}/?identifier=${identifier}&language=${language}&format=${this.format}&fallbackLanguage=${this.fallbackLanguage}`

    let response = <IApiResponse>{}
    try {
      response = await this.axios({method: 'GET', url})
    } catch (error: any) {
      if (error.response) {
        const errorResponse = error.response

        if (errorResponse.status === 404) {
          if (language === this.fallbackLanguage) {
            throw new NotFoundError(`No guide for identifier "${identifier}" with language "${primaryLanguage}" or fallback language "${language}" found.`)
          }

          return await this._getGuideText(identifier, this.fallbackLanguage, language)
        }
      } else {
        throw error
      }
    }

    return {content: response.data, fetchedLanguage: language}
  }
}

