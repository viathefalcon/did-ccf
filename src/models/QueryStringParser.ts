/**
 * Class for parsing parameters specified on the query string.
 */
export class QueryStringParser {

    static readonly PARSER_REGEX = /([^=?#&]+)=?([^&]*)/g;

    /**
     * Key-value to hold the parsed params.
     */
    [key: string]: string;

    /**
     * Constructs a new instance of the class.
     * @param {string} queryString to parse.
     */
    constructor (public queryString: string) {
        
        let param;   

        while (param = QueryStringParser.PARSER_REGEX.exec(queryString)){
            this[param[1]] = param[2];
        }
    }
}