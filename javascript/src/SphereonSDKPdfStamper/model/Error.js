/**
 * PDF stamper
 * The PDF Stamper API enables the possibility to add both static and dynamic stamps on existing PDFs. The stamps can consist of one or more barcode, hyperlink, image, line or text elements.    The flow is generally as follows:  1. Make a configuration containing the stamp information  2. Create a job specifying the desired configuration  3. Add one or more PDF files to the job  4. Start the job for processing  5. Retrieve the processed files    Full API Documentation: https://docs.sphereon.com/api/pdf-stamper/1.0  Interactive testing: A web based test console is available in the Sphereon API Store at https://store.sphereon.com
 *
 * OpenAPI spec version: 1.0
 * Contact: dev@sphereon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['SphereonSDKPdfStamper/ApiClient', 'SphereonSDKPdfStamper/model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Error'));
  } else {
    // Browser globals (root is window)
    if (!root.PdfStamper) {
      root.PdfStamper = {};
    }
    root.PdfStamper.Error = factory(root.PdfStamper.ApiClient, root.PdfStamper.Error);
  }
}(this, function(ApiClient, Error) {
  'use strict';




  /**
   * The Error model module.
   * @module SphereonSDKPdfStamper/model/Error
   * @version 1.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * An error
   * @alias module:SphereonSDKPdfStamper/model/Error
   * @class
   * @param code {String} 
   * @param level {module:SphereonSDKPdfStamper/model/Error.LevelEnum} 
   * @param message {String} 
   */
  var exports = function(code, level, message) {
    var _this = this;

    _this['code'] = code;
    _this['level'] = level;

    _this['message'] = message;
  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:SphereonSDKPdfStamper/model/Error} obj Optional instance to populate.
   * @return {module:SphereonSDKPdfStamper/model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'String');
      }
      if (data.hasOwnProperty('cause')) {
        obj['cause'] = Error.constructFromObject(data['cause']);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {module:SphereonSDKPdfStamper/model/Error.LevelEnum} level
   */
  exports.prototype['level'] = undefined;
  /**
   * @member {module:SphereonSDKPdfStamper/model/Error} cause
   */
  exports.prototype['cause'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;


  /**
   * Allowed values for the <code>level</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LevelEnum = {
    /**
     * value: "INFO"
     * @const
     */
    "INFO": "INFO",
    /**
     * value: "WARNING"
     * @const
     */
    "WARNING": "WARNING",
    /**
     * value: "FATAL"
     * @const
     */
    "FATAL": "FATAL"  };


  return exports;
}));

