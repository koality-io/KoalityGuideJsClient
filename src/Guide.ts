/**
 * This class represents a single guide that was fetched via the client.
 *
 * @author Nils Langner <nils.langner@webpros.com>
 * @created 2021-08-28
 */
interface IButtons {
  target?: string
  url: string
  label: string
}

interface ICta extends IButtons {
  subline?: string
}

interface IMetaInformation {
  language?: string
  format?: string
  buttons?: IButtons[]
  cta?: ICta[]
}

export default class Guide {
  private readonly identifier: string
  private readonly language: string
  private readonly text: string
  private readonly format: string
  private readonly meta: IMetaInformation

  /**
   * The constructor.
   *
   * @param {string} identifier
   * @param {string} language
   * @param {string} text
   * @param {IMetaInformation} meta
   * @param {string} format
   */
  constructor(identifier: string, language: string, text: string, meta: IMetaInformation, format = 'md') {
    this.identifier = identifier
    this.language = language
    this.text = text
    this.format = format
    this.meta = meta
  }

  /**
   * Get the guides text.
   *
   * @returns {string}
   */
  getText(): string {
    return this.text
  }

  /**
   * Get the guides meta information.
   *
   * @returns {IMetaInformation}
   */
  getMetaInformation(): IMetaInformation {
    return this.meta
  }

  /**
   * Get the guides identifier.
   *
   * @returns {string}
   */
  getIdentifier(): string {
    return this.identifier
  }

  /**
   * Get the guides language.
   *
   * @returns {string}
   */
  getLanguage(): string {
    return this.language
  }

  /**
   * Get the guides format.
   *
   * @returns {string}
   */
  getFormat(): string {
    return this.format
  }
}
